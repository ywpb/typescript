"use strict";
{
    class collection {
        constructor() {
            this._data = [];
        }
        push(...items) {
            this._data.push(...items);
        }
        shift() {
            return this._data.shift();
        }
        get data() {
            return this._data;
        }
    }
    const h1 = new collection();
    h1.push(1, 2, 3, 4, 5, 'juejin');
    console.log(h1.data);
    const user1 = { name: 'juejin', age: 12 };
    const user2 = { name: 'baidu', age: 22, phone: 13000000000 };
    const h2 = new collection();
    h2.push(user1, user2);
    console.log(h2.data);
}
