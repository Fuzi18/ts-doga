"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Statue_height;
class Statue {
    constructor(title, year, price, height) {
        _Statue_height.set(this, void 0);
        this.title = title;
        this.year = year;
        this.price = price;
        __classPrivateFieldSet(this, _Statue_height, height, "f");
    }
}
_Statue_height = new WeakMap();
