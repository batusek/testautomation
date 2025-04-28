import * as assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';

Given('account with statement distribution by {string}', function (mode) {
    this.modeBefore = mode;
});

When('I change the distribution to {string}', function (mode) {
    this.error = "";
    if (mode==='post') {
        this.modeAfter=this.modeBefore;
        if (this.modeBefore==='IB' || this.modeBefore==='email') {
            this.error = 'change not possible';
        }
    } else
        this.modeAfter = mode;
});

Then('the statement should be sent by {string}', function (mode) {
    assert.strictEqual(this.modeAfter, mode);
});

Then('error message is {string}', function (error) {
    assert.strictEqual(this.error, error);
});