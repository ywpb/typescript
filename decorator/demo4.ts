{
    const SleepDecorator:MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)=>{
        const method = descriptor.value
        descriptor.value = ()=>{
            setTimeout(() => {
                console.log('object');
                method()
            }, 1000);
        }
    }

    const SleepDecoratorFactory = (sleep:number):MethodDecorator=>{
        return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)=>{
            const method = descriptor.value
            descriptor.value = ()=>{
                setTimeout(() => {
                    method()
                }, sleep);
            }
        }
    }


    class User{

        @SleepDecorator
        @SleepDecoratorFactory(3000)
        public response(){
            console.log('请求');
        }
    }

    new User().response()
}