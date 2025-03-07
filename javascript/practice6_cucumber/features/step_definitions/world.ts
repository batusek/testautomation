import { World, IWorldOptions } from '@cucumber/cucumber';

export default class CustomWorld extends World {
    actualAnswer: number;

    constructor(options: IWorldOptions) {
        super(options);
        this.actualAnswer = 0;
    }
}
