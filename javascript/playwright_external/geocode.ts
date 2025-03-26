export class Geocoder {
    /**
     * Retrieves latitude and longitude coordinates for a given city using the Nominatim API.
     *
     * @param {string} city_name The name of the city.
     * @returns {Promise<[number, number]>} A promise that resolves to a tuple (latitude, longitude) if found, or [0,0].
     */
    async geocode(city_name: string): Promise<[number, number]> {
        const url = `https://nominatim.openstreetmap.org/search?q=${city_name}&format=json&limit=1`;
      
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
        
            if (data && data.length > 0) {
                const latitude = parseFloat(data[0].lat);
                const longitude = parseFloat(data[0].lon);
                return [latitude, longitude];
            } else {
                return [0,0];
            }
        } catch (error) {
            console.error("Error during API call:", error);
            return [0,0];
        }
    }
}


export class GeoUtils {
    private static EARTH_RADIUS_KM = 6371;


    async distance(city1: string, city2: string): Promise<number> {
       let geocoder = new Geocoder();
       const [lat1, lon1] = await geocoder.geocode(city1);
       const [lat2, lon2] = await geocoder.geocode(city2);

        
        const dLat = this.toRadians(lat2 - lat1);
        const dLon = this.toRadians(lon2 - lon1);
        
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                 Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) * 
                 Math.sin(dLon/2) * Math.sin(dLon/2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return GeoUtils.EARTH_RADIUS_KM * c;
    }

    private toRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
    }
}
