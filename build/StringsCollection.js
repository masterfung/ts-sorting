"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringsCollection = void 0;
const Sorter_1 = require("./Sorter");
class StringsCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    swap(leftIndex, rightIndex) {
        const chars = this.data.split("");
        const leftHand = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftHand;
        this.data = chars.join("");
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
}
exports.StringsCollection = StringsCollection;
