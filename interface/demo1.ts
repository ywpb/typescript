{
    /**
     * 坦克 抽象 (abstract)  与 接口(interface)
     */
    interface AnimationInterface {
        name:string
    }
    abstract class Animation{
        abstract move():void
    }

    class Enemy extends Animation implements AnimationInterface{
        name:string = '敌人'
        public move():string{
            return `${this.name}坦克`
        }
    }

    class OwnPeople extends Animation implements AnimationInterface{
        name:string = '我方'
        public move():string{
            return `${this.name}坦克`
        }
    }

    const enemy = new Enemy()
    const ownPeople = new OwnPeople()
    console.log(enemy.move());
    console.log(ownPeople.move());
}