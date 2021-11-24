"use strict";
{
    var IObserver = /** @class */ (function () {
        function IObserver(els) {
            this.els = els;
            this.Observer = new IntersectionObserver(this.callback);
        }
        // protected setSrc(el:HTMLImageElement,data:string){
        //     const src = el.getAttribute(data)
        //     console.log(src);
        // }
        IObserver.prototype.callback = function (change) {
            change.forEach(function (item) {
                if (item.isIntersecting) {
                    var img = item.target.querySelector('img');
                    var src = img.getAttribute('data-img');
                    img.src = src;
                }
            });
        };
        IObserver.prototype.load = function () {
            var _this = this;
            this.els.forEach(function (el) {
                _this.Observer.observe(el);
            });
        };
        return IObserver;
    }());
    var els = document.querySelectorAll('.img-area');
    var lazy = new IObserver(els);
    lazy.load();
}
