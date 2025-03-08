import { test, expect } from '@playwright/test';
import { Geocoder, GeocoderSimulator, GeoUtils } from './geocode';

const cityLocations = {
    "Blansko": [49.363388, 16.643891] as [number, number],
    "Znojmo": [48.855859, 16.048419] as [number, number]
};

// After start
test.describe('Geocoder tests', () => {
    const geocoders = [new Geocoder(), new GeocoderSimulator(cityLocations)];

    geocoders.forEach(geocoder => {
        test(`geocode Blansko using ${geocoder.constructor.name}`, async () => {
            let coordinates = await geocoder.geocode("Blansko");
            const [latitude, longitude] = coordinates;
            expect(latitude).toBeCloseTo(49.36,2);
            expect(longitude).toBeCloseTo(16.64,2);
        });

        test(`geocode Znojmo using ${geocoder.constructor.name}`, async () => {
            let coordinates = await geocoder.geocode("Znojmo");
            const [latitude, longitude] = coordinates;
            expect(latitude).toBeCloseTo(48.86, 2);
            expect(longitude).toBeCloseTo(16.05, 2);
        });    

    });
});

test('geocode Blansko', async () => {
    const geocoder = new Geocoder();
    let coordinates = await geocoder.geocode("Blansko");
    const [latitude, longitude] = coordinates;
    expect(latitude).toBeCloseTo(49.36,2);
    expect(longitude).toBeCloseTo(16.64,2);
});

test('distance between Blansko and Znojmo', async () => {
    const geocoder = new GeocoderSimulator(cityLocations);
    const geoUtils = new GeoUtils(geocoder);
    const distance = await geoUtils.distance("Blansko", "Znojmo");
    expect(distance).toBeCloseTo(71, 0);
});

// After end