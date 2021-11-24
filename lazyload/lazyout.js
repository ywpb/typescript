"use strict";
{
    var load = /** @class */ (function () {
        function load(els) {
            this.els = els;
        }
        //is intersection
        load.prototype.isIntersection = function (el) {
            var rect = el.getBoundingClientRect();
            return rect.top > 0
                && rect.bottom < window.innerHeight
                && rect.left > 0
                && rect.right < window.innerWidth;
        };
        load.prototype.setSrc = function (el, item) {
            var src = el.getAttribute(item);
            el.src = src;
        };
        load.prototype.load = function () {
            var _this = this;
            this.els.forEach(function (element) {
                var img = element.querySelector('img');
                if (_this.isIntersection(element)) {
                    _this.setSrc(img, 'data-img');
                }
            });
        };
        return load;
    }());
}
