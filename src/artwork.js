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
    kiir() {
        console.log(this.toString());
    }
    toString() {
        let myContainer = document.querySelector(".tbody");
    }
}
_Statue_height = new WeakMap();
document.addEventListener('DOMContentLoaded', () => {
    let nev = document.getElementById("nev").value;
    let ev = (document.getElementById("ev").value);
    let ar = parseInt(document.getElementById("ar").value);
    let magassag = parseInt(document.getElementById("magassag").value);
    if (nev.length < 1) {
        alert("Nem megfelelő a megadott név!");
    }
    else if (ev.length < 1) {
        alert("Nem jó a megadott év!");
    }
    else if (ar < 1) {
        alert("Nem jó a megadott ár!");
    }
    else if (magassag < 10) {
        alert("Nem megfelelő a megadott magasság!");
    }
});
