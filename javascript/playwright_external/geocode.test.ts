import { test, expect } from '@playwright/test';
import { Geocoder } from './geocode';

test('geocode Blansko', async ({ page }) => {
    let city = "Blansko";
    const geocoder = new Geocoder();
    let coordinates = await geocoder.geocode(city);
    const [latitude, longitude] = coordinates;
    expect(latitude).toBeCloseTo(49.36,2);
    expect(longitude).toBeCloseTo(16.64,2);
});
