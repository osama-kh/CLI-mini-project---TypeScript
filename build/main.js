"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palindrome_1 = require("./palindrome");
const Nationalize_1 = require("./Nationalize");
const Lower_1 = require("./Lower");
const Digits_1 = require("./Digits");
const Armstrong_1 = require("./Armstrong");
class List {
    constructor() {
        this.key = 0;
    }
    print_result(val) {
        console.log("the result is: " + val);
    }
    run(key) {
        switch (key) {
            case 1:
                this.operation = new palindrome_1.Palindrome();
                this.print_result(this.operation.command_param_number(132));
                break;
            case 2:
                this.operation = new Lower_1.Lower();
                this.print_result(this.operation.command_param_string("HeLlo"));
                break;
            case 3:
                this.operation = new Digits_1.Digits();
                this.print_result(this.operation.command_param_string("123"));
                break;
            case 4:
                this.operation = new Armstrong_1.Armstrong();
                this.print_result(this.operation.command_param_number(1634));
                break;
            case 5:
                this.operation = new Nationalize_1.Nationalize();
                this.print_result(this.operation.command_param_string("Yuval"));
                break;
            case 6:
                break;
            default:
                break;
        }
    }
}
var list = new List();
list.run(1);
list.run(2);
list.run(3);
list.run(4);
list.run(5);
// list.run(1)
// console.log(list.IsPalindrome(5421))
// console.log(list.IsLower("HeLlo"))
// console.log(list.IsLower("kijk"))
// console.log(list.IsAllDigits("12j"))
// console.log(list.IsAllDigits("123"))
// console.log(list.IsArmstrong(1234))
// console.log(list.IsArmstrong(1634))
// console.log(list.Nationalize("Yuval"))
