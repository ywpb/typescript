"use strict";
{
    var IObserver = /** @class */ (function () {
        // Observer:IntersectionObserver
        function IObserver(els) {
            this.els = els;
        }
        IObserver.prototype.IntersectionObserver = function (els) {
            var callback = function (change) {
                change.forEach(function (item) {
                    if (item.isIntersecting) {
                        var img = item.target.querySelector('img');
                        var src = img.getAttribute('data-img');
                        img.src = src;
                        Observer.unobserve(item.target);
                    }
                });
            };
            var Observer = new IntersectionObserver(callback);
            els.forEach(function (el) {
                Observer.observe(el);
            });
        };
        IObserver.prototype.load = function () {
            this.IntersectionObserver(els_1);
            // this.els.forEach((el)=>{
            //     this.Observer.observe(el)
            // })
        };
        return IObserver;
    }());
    var els_1 = document.querySelectorAll('.img-area');
    var lazy = new IObserver(els_1);
    lazy.load();
}
