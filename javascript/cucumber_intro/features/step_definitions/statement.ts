import * as assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';

Given('I have received statement by {string}', function (mode) {
    this.modeBefore = mode;
    return 'none';
});

When('I change the statement from {string} to {string}', function (oldMode, newMode) {
    assert.strictEqual(this.modeBefore, oldMode);
    this.modeAfter = newMode;
    return 'none';
});

Then('the statement should be sent by {string}', function (mode) {
    assert.strictEqual(this.modeAfter, mode);
    return 'none';
});