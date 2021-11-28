{

    interface UserInterface{
        name:string
        age:number
        phone?:number
    }
    
    class collection<T>{
        protected _data:T[] = []
        public push(...items:T[]){
            this._data.push(...items)
        }

        public shift():T|undefined{
            return this._data.shift()
        }

        public get data(){
            return this._data
        }
    }

    const h1 = new collection<number|string>()
    h1.push(1,2,3,4,5,'juejin')
    console.log(h1.data);

    const user1:UserInterface = {name:'juejin',age:12}
    const user2:UserInterface = {name:'baidu',age:22,phone:13000000000}
    const h2 = new collection<UserInterface>()
    h2.push(user1,user2)
    console.log(h2.data);
}