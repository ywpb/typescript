"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    const moveDecorator = (target) => {
        target.prototype.getPosition = () => {
            return { x: 100, y: 100 };
        };
    };
    let Tank = class Tank {
    };
    Tank = __decorate([
        moveDecorator
    ], Tank);
    let t = new Tank();
    console.log(t.getPosition());
    let t2 = new Tank();
    console.log(t.getPosition());
}
