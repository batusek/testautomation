import * as assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';

Given('the calculator is open', function () {
    return 'none';
});

When('I enter {string} and {string} and {string}', function (arg1, operator, arg2) {
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
});

Then('the result should be {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, parseInt(expectedAnswer));    
});