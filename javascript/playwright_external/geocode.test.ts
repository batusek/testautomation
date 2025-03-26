import { test, expect } from '@playwright/test';
 import { Geocoder, GeoUtils } from './geocode';

const cityLocations = {
    "Blansko": [49.363388, 16.643891] as [number, number],
    "Znojmo": [48.855859, 16.048419] as [number, number]
};

