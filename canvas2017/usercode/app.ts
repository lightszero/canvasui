///<reference path="../zebra/zebra.d.ts" />
class Greeter
{
    element: HTMLElement;

    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    start() {
        //this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
        zebra()["zebra.json"] = "zebra/zebra.json";
        zebra.ready( ()=>
        {
            // create canvas 400x700 pixels
            var canvas = new zebra.ui.zCanvas(400, 700);

            // fill canvas root panel with UI components
            canvas.root.setLayout(new zebra.layout.BorderLayout(8));
            canvas.root.add(zebra.layout.CENTER, new zebra.ui.TextArea("You must see http://www.zebkit.com"));
            canvas.root.add(zebra.layout.BOTTOM, new zebra.ui.Button("Clean"));
        });
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};