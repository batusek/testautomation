import { test, expect } from '@playwright/test';
import { Geocoder, GeocoderSimulator, GeoUtils } from './geocode';


// After start
test.describe('Geocoder tests', () => {
    const geocoders = [new Geocoder(), new GeocoderSimulator({ 
        "Blansko": [49.36, 16.64],
        "Znojmo": [48.86, 16.05]
    })];

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
    const geocoder = new Geocoder();
    const geoUtils = new GeoUtils(geocoder);
    const distance = await geoUtils.distance("Blansko", "Znojmo");
    expect(distance).toBeCloseTo(71, 0);
});

// After end