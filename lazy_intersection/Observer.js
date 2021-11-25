"use strict";
{
    class IObserver {
        // Observer:IntersectionObserver
        constructor(els) {
            this.els = els;
        }
        IntersectionObserver(els) {
            let callback = (change) => {
                change.forEach((item) => {
                    if (item.isIntersecting) {
                        const img = item.target.querySelector('img');
                        const src = img.getAttribute('data-img');
                        img.src = src;
                        Observer.unobserve(item.target);
                    }
                });
            };
            let Observer = new IntersectionObserver(callback);
            els.forEach(el => {
                Observer.observe(el);
            });
        }
        load() {
            this.IntersectionObserver(els);
            // this.els.forEach((el)=>{
            //     this.Observer.observe(el)
            // })
        }
    }
    const els = document.querySelectorAll('.img-area');
    let lazy = new IObserver(els);
    lazy.load();
}
