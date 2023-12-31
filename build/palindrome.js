"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Palindrome = void 0;
const BaseCommand_1 = require("./BaseCommand");
class Palindrome extends BaseCommand_1.BaseCommand {
    // public IsPalindrome(params:Number) :boolean{
    //     let temp : string ="";
    //     for(let i:number =params.toString().length-1; i>=0; i-- ){
    //         temp +=params.toString()[i]
    //     }
    //     return parseInt(temp)==params;
    // }
    command_param_number(params) {
        let temp = "";
        for (let i = params.toString().length - 1; i >= 0; i--) {
            temp += params.toString()[i];
        }
        return parseInt(temp) == params;
    }
}
exports.Palindrome = Palindrome;
