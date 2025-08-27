import * as assert from 'assert';
import { Given, When, Then } from './fixtures';


Given('account with statement distribution by {string}', async ({ world }, mode) => {
    world.modeBefore = mode;
});

When('I change the distribution to {string}', async ({ world }, mode) => {
    world.error = "";
    if (mode==='post') {
        world.modeAfter=world.modeBefore;
        if (world.modeBefore==='IB' || world.modeBefore==='email') {
            world.error = 'change not possible';
        }
    } else
        world.modeAfter = mode;
});

Then('the statement should be sent by {string}', async ({ world }, mode) => {
    assert.strictEqual(world.modeAfter, mode);
});

Then('error message is {string}', async ({ world }, error) => {
    assert.strictEqual(world.error, error);
});