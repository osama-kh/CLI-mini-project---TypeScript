"use strict";
class List {
    constructor() {
    }
    IsPalindrome(params) {
        let temp = "";
        for (let i = params.toString().length - 1; i >= 0; i--) {
            temp += params.toString()[i];
        }
        return parseInt(temp) == params;
    }
    IsLower(params) {
        let temp = params.toLowerCase();
        return params === temp;
    }
    IsAllDigits(params) {
        for (let i = 0; i < params.length; i++) {
            if (!/^\d$/.test(params[i])) {
                return false;
            }
        }
        return true;
    }
    IsArmstrong(params) {
        let temp = params.toString();
        const size = temp.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            sum += Math.pow(parseInt(temp[i]), size);
        }
        return sum == params;
    }
}
var list = new List();
// console.log(list.IsPalindrome(5421))
// console.log(list.IsLower("HeLlo"))
// console.log(list.IsLower("kijk"))
// console.log(list.IsAllDigits("12j"))
// console.log(list.IsAllDigits("123"))
console.log(list.IsArmstrong(1234));
console.log(list.IsArmstrong(1634));
