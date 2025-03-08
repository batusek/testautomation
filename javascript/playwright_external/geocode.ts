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

export class GeocoderSimulator extends Geocoder {
    private coordinates: { [key: string]: [number, number] };

    constructor(coordinates: { [key: string]: [number, number] }) {
        super();
        this.coordinates = coordinates;
    }

    async geocode(city_name: string): Promise<[number, number]> {
        return this.coordinates[city_name] || [0, 0];
    }
}
