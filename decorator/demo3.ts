{
    const showDecorator:MethodDecorator = (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor)=>{
        target.age = 'word'
        descriptor.value=()=>{
            console.log('hi');
        }
        
    }

    class User{

        @showDecorator
        public show(){
            console.log('hello');
        }
    }

    new User().show()
}