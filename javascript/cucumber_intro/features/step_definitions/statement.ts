import * as assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';

Given('account with statement distribution by {string}', function (mode) {
    this.modeBefore = mode;
    return 'none';
});

When('I change the distribution to {string}', function (mode) {
    if (mode==='post')
        this.modeAfter=this.modeBefore;
    else
        this.modeAfter = mode;
    return 'none';
});

Then('the statement should be sent by {string}', function (mode) {
    assert.strictEqual(this.modeAfter, mode);
    return 'none';
});

Then('error message is {string}', function (error) {
    return 'pending';
});