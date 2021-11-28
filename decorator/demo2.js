"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    const MusicDecorator = (type) => {
        switch (type) {
            case 'Tank': {
                return (target) => {
                    console.log('逆战');
                };
            }
            default: {
                return (target) => {
                    console.log('bgm');
                };
            }
        }
    };
    let Tank = class Tank {
    };
    Tank = __decorate([
        MusicDecorator('Tank')
    ], Tank);
    new Tank();
    let User = class User {
    };
    User = __decorate([
        MusicDecorator('')
    ], User);
    new User();
}
