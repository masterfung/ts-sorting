"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const StringsCollection_1 = require("./StringsCollection");
const numsArr = new NumbersCollection_1.NumbersCollection([10, 4, 20, 11, 211, 3, 2, -12, 90, 23]);
numsArr.sort();
console.log(numsArr);
const chars = new StringsCollection_1.StringsCollection("XCasTraBBt");
chars.sort();
console.log('str -->', chars);
