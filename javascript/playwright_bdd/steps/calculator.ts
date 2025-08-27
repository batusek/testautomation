import * as assert from 'assert';
import { Given, When, Then } from './fixtures';

Given('the calculator is open', async ( {world} ) => {
    return 'none';
});

When('I enter {string} and {string} and {string}', async ( {world}, arg1, operator, arg2 ) => {
const num1 = parseInt(arg1);
    const num2 = parseInt(arg2);
    
    switch(operator) {
        case '+':
            world.actualAnswer = num1 + num2;
            break;
        case '-':
            world.actualAnswer = num1 - num2;
            break;
        case '*':
            world.actualAnswer = num1 * num2;
            break;
        case '/':
            world.actualAnswer = num1 / num2;
            break;
        default:
            throw new Error('Invalid operator');
    }
});

Then('the result should be {string}', async ( {world}, expectedAnswer ) => {
    assert.strictEqual(world.actualAnswer, parseInt(expectedAnswer));    
});