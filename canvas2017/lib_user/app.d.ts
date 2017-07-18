/// <reference path="../zebra/zebra.d.ts" />
declare class Greeter {
    element: HTMLElement;
    timerToken: number;
    constructor(element: HTMLElement);
    start(): void;
    stop(): void;
}
