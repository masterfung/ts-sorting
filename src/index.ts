import { NumbersCollection } from "./NumbersCollection";
import { StringsCollection } from "./StringsCollection";

const numsArr = new NumbersCollection([10, 4, 20, 11, 211, 3, 2, -12, 90, 23]);
numsArr.sort();
console.log(numsArr);

const chars = new StringsCollection("XCasTraBBt");
chars.sort();

console.log('str -->', chars);