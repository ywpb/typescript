"use strict";
{
    class Animation {
    }
    class Enemy extends Animation {
        constructor() {
            super(...arguments);
            this.name = '敌人';
        }
        move() {
            return `${this.name}坦克`;
        }
    }
    class OwnPeople extends Animation {
        constructor() {
            super(...arguments);
            this.name = '我方';
        }
        move() {
            return `${this.name}坦克`;
        }
    }
    const enemy = new Enemy();
    const ownPeople = new OwnPeople();
    console.log(enemy.move());
    console.log(ownPeople.move());
}
