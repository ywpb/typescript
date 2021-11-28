{
    const MusicDecorator = (type:string):ClassDecorator=>{
        switch(type){
            case 'Tank':{
                return (target)=>{
                    console.log('逆战');
                }
            }

            default:{
                return (target)=>{
                    console.log('bgm')
                }
            }
        }
        
    }
    
    
    @MusicDecorator('Tank')
    class Tank{}
    new Tank()

    @MusicDecorator('')
    class User{}
    new User()
}