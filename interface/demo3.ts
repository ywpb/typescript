{
    enum sexType{
        BOY,
        GIRL
    }
    interface User{
        name:string
        age:number
        sex:sexType
    }

    class user{
        _user:User
        constructor(user:User){
            this._user = user
        }

        public get info():User{
            return this._user
        }
    }

    const boy = new user({name:'juejin',age:12,sex:sexType.BOY})
    console.log(boy.info);

    const girl = new user({name:"baidu",age:11,sex:sexType.GIRL})
    console.log(girl.info);


}