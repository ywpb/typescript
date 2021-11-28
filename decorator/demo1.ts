{
    const moveDecorator:ClassDecorator = (target:Function)=>{
        target.prototype.getPosition = ():{x:number,y:number}=>{
            return {x:100,y:100}
        }
    }
    
    
    @moveDecorator
    class Tank {
        
    }
    
    let t = new Tank()
    console.log((<any>t).getPosition());
    
    let t2 = new Tank()
    console.log((t as any).getPosition())
    
}