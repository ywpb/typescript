"use strict";
{
    let sexType;
    (function (sexType) {
        sexType[sexType["BOY"] = 0] = "BOY";
        sexType[sexType["GIRL"] = 1] = "GIRL";
    })(sexType || (sexType = {}));
    class user {
        constructor(user) {
            this._user = user;
        }
        get info() {
            return this._user;
        }
    }
    const boy = new user({ name: 'juejin', age: 12, sex: sexType.BOY });
    console.log(boy.info);
    const girl = new user({ name: "baidu", age: 11, sex: sexType.GIRL });
    console.log(girl.info);
}
