{
    function identity <T> (value:T):T{
        return value
    }

    console.log(identity<number[]>([1,3,5]))
}