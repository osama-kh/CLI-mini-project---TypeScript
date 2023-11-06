"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Palindrome = void 0;
class Palindrome extends BaseCommand {
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
