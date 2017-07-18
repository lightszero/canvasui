var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
    }
    Greeter.prototype.start = function () {
        zebra()["zebra.json"] = "zebra/zebra.json";
        zebra.ready(function () {
            var canvas = new zebra.ui.zCanvas(400, 700);
            canvas.root.setLayout(new zebra.layout.BorderLayout(8));
            canvas.root.add(zebra.layout.CENTER, new zebra.ui.TextArea("You must see http://www.zebkit.com"));
            canvas.root.add(zebra.layout.BOTTOM, new zebra.ui.Button("Clean"));
        });
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map