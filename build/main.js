"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const palindrome_1 = require("./palindrome");
const Nationalize_1 = require("./Nationalize");
const Lower_1 = require("./Lower");
const Digits_1 = require("./Digits");
const Armstrong_1 = require("./Armstrong");
const readlineSync = __importStar(require("readline-sync"));
class List {
    constructor() {
        this.key = 0;
        this.Exit_flag = true;
    }
    print_result(val) {
        console.log("the result is: " + val);
    }
    print_instruction_list() {
        console.log("The available commands are:");
        console.log("1 — Palindrome — Check if the input is a palindrome");
        console.log("2 - Lower - Check if all characters in the input are lowercase");
        console.log("3 - Digits - Check if all characters in the input are digits");
        console.log("4 - Armstrong - Check if the input is an 'Armstrong Number'");
        console.log("5 - Nationalize - Check the nationality probability of a given first name        ");
        console.log("6 - Exit - Exit successfully from the application");
        // Enter the number of the command: 4
        // Enter the input: 371
        // The answer is: True
    }
    print_input() {
        let param = readlineSync.question('Enter the input: ');
        return param;
    }
    run() {
        do {
            this.print_instruction_list();
            let key = parseInt(readlineSync.question('Enter the number of the command: '));
            switch (key) {
                case 1:
                    this.operation = new palindrome_1.Palindrome();
                    this.print_result(this.operation.command_param_number(parseInt(this.print_input())));
                    break;
                case 2:
                    this.operation = new Lower_1.Lower();
                    this.print_result(this.operation.command_param_string(this.print_input()));
                    break;
                case 3:
                    this.operation = new Digits_1.Digits();
                    this.print_result(this.operation.command_param_string(this.print_input()));
                    break;
                case 4:
                    this.operation = new Armstrong_1.Armstrong();
                    this.print_result(this.operation.command_param_number(parseInt(this.print_input())));
                    break;
                case 5:
                    this.operation = new Nationalize_1.Nationalize();
                    this.print_result(this.operation.command_param_string(this.print_input()));
                    break;
                case 6:
                    this.Exit_flag = false;
                    break;
                default:
                    break;
            }
        } while (this.Exit_flag);
    }
}
var list = new List();
list.run();
// list.run(2)
// list.run(3)
// list.run(4)
// list.run(5)
// list.run(1)
// console.log(list.IsPalindrome(5421))
// console.log(list.IsLower("HeLlo"))
// console.log(list.IsLower("kijk"))
// console.log(list.IsAllDigits("12j"))
// console.log(list.IsAllDigits("123"))
// console.log(list.IsArmstrong(1234))
// console.log(list.IsArmstrong(1634))
// console.log(list.Nationalize("Yuval"))
