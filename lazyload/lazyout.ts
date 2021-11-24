{
    class load{
        els:NodeListOf<Element>
        constructor(els:NodeListOf<Element>){
            this.els = els
        }

        //is intersection
        protected isIntersection(el:HTMLDivElement):boolean{
            const rect = el.getBoundingClientRect()
            
            return rect.top>0
                && rect.bottom < window.innerHeight
                && rect.left>0
                && rect.right<window.innerWidth
        }

        protected setSrc(el:HTMLImageElement,item:string){
            const src = el.getAttribute(item) as string
            el.src = src
        }
        load(){
            this.els.forEach(element => {
                let img = element.querySelector('img') as HTMLImageElement
                if(this.isIntersection(element as HTMLDivElement)){
                    this.setSrc(img,'data-img')
                }
            });
        }
    }
}