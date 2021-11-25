"use strict";
{
    class load {
        constructor(els) {
            this.els = els;
        }
        //is intersection
        isIntersection(el) {
            const rect = el.getBoundingClientRect();
            return rect.top > 0
                && rect.bottom < window.innerHeight
                && rect.left > 0
                && rect.right < window.innerWidth;
        }
        setSrc(el, item) {
            const src = el.getAttribute(item);
            el.src = src;
        }
        load() {
            this.els.forEach(element => {
                let img = element.querySelector('img');
                if (this.isIntersection(element)) {
                    this.setSrc(img, 'data-img');
                }
            });
        }
    }
}
