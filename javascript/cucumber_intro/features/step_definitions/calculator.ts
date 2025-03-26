import * as assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';

Given('the calculator is open', function () {
// After start
    return 'none';
// After end
});

When('I enter {string} and {string} and {string}', function (arg1, operator, arg2) {
// After start
const num1 = parseInt(arg1);
    const num2 = parseInt(arg2);
    
    switch(operator) {
        case '+':
            this.actualAnswer = num1 + num2;
            break;
        case '-':
            this.actualAnswer = num1 - num2;
            break;
        case '*':
            this.actualAnswer = num1 * num2;
            break;
        case '/':
            this.actualAnswer = num1 / num2;
            break;
        default:
            throw new Error('Invalid operator');
    }
// After end
});

Then('the result should be {string}', function (expectedAnswer) {
// After start
    assert.strictEqual(this.actualAnswer, parseInt(expectedAnswer));    
// After end
});