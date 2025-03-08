import { test, expect } from '@playwright/test';
import { Geocoder, GeocoderSimulator } from './geocode';

test('geocode Blansko simulator', async () => {
    let city = "Blansko";
    const geocoder = new GeocoderSimulator({ "Blansko": [49.36, 16.64] });
    let coordinates = await geocoder.geocode(city);
    const [latitude, longitude] = coordinates;
    expect(latitude).toBeCloseTo(49.36,2);
    expect(longitude).toBeCloseTo(16.64,2);
});

test('geocode Blansko', async () => {
    let city = "Blansko";
    const geocoder = new Geocoder();
    let coordinates = await geocoder.geocode(city);
    const [latitude, longitude] = coordinates;
    expect(latitude).toBeCloseTo(49.36,2);
    expect(longitude).toBeCloseTo(16.64,2);
});
