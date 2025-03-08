import { test, expect } from '@playwright/test';
import { Geocoder, GeocoderSimulator } from './geocode';

// After start
test.describe('Geocoder', () => {
    const geocoders = [new Geocoder(), new GeocoderSimulator({ "Blansko": [49.36, 16.64] })];
    geocoders.forEach(geocoder => {
        test(`geocode Blansko using ${geocoder.constructor.name}`, async () => {
            let coordinates = await geocoder.geocode("Blansko");
            const [latitude, longitude] = coordinates;
            expect(latitude).toBeCloseTo(49.36,2);
            expect(longitude).toBeCloseTo(16.64,2);
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
// After end