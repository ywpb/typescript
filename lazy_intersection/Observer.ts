{
    class IObserver{
        els:NodeListOf<Element>
        // Observer:IntersectionObserver

        constructor(els:NodeListOf<Element>){
            this.els = els
            
        }
        
        protected IntersectionObserver(els:NodeListOf<Element>){

            let callback = (change:IntersectionObserverEntry[]) =>{
                change.forEach((item)=>{
                    if(item.isIntersecting){
                        const img = item.target.querySelector('img') as HTMLImageElement
                        const src = img.getAttribute('data-img') as string
                        img.src = src
                        Observer.unobserve(item.target)
                    }
                })
            }

            let Observer:IntersectionObserver = new IntersectionObserver(callback)

            els.forEach(el=>{
                Observer.observe(el)
            })
        }

        load(){

            this.IntersectionObserver(els)
            // this.els.forEach((el)=>{
            //     this.Observer.observe(el)
            // })
        }
    }

    const els = document.querySelectorAll('.img-area')
    let lazy = new IObserver(els)
    lazy.load()
}