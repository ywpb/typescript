{
    interface comments<T,M>{
        name:string
        id:number
        isDel:T
        comment:M
    }

    type comment={
        content:string
        time:Date
    }

    const data : comments<boolean,comment[]> = {
        name: "juejin",
        id: 0,
        isDel: true,
        comment: [{content:'好',time:new Date()}]
    }

    console.log(data);

}