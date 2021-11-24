{
    class IObserver{
        els:NodeListOf<Element>
        Observer:IntersectionObserver

        constructor(els:NodeListOf<Element>){
            this.els = els
            this.Observer = new IntersectionObserver(this.callback)
        }
        
        // protected setSrc(el:HTMLImageElement,data:string){
        //     const src = el.getAttribute(data)
        //     console.log(src);
        // }

        protected callback(change:IntersectionObserverEntry[]){
            change.forEach((item)=>{
                if(item.isIntersecting){
                    const img = item.target.querySelector('img') as HTMLImageElement
                    const src = img.getAttribute('data-img') as string
                    img.src = src
                    
                }
            })
        }
        load(){
            this.els.forEach((el)=>{
                this.Observer.observe(el)
            })
        }
    }

    const els = document.querySelectorAll('.img-area')
    let lazy = new IObserver(els)
    lazy.load()
}