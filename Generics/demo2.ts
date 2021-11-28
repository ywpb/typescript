{
    function getLength<T extends string | any[]>(arg:T):number{
        return arg.length
    }

    console.log(getLength('hello'));
    console.log(getLength(['juejin','baidu']))
}