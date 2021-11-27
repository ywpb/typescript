"use strict";
{
    const user = {
        name: 'juejin',
        age: 11,
        lock: false
    };
    function isLock(user, lock) {
        user.lock = lock;
        return user;
    }
    console.log(isLock(user, true));
}
