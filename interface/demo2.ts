{
    interface User{
        name:string,
        age:number,
        lock:boolean
    }

    const user:User = {
        name:'juejin',
        age:11,
        lock:false
    }

    function isLock(user:User,  lock:boolean):User{
        user.lock = lock
        return user
    }

    console.log(isLock(user,true));
}