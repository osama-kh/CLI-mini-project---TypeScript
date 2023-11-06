"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Digits = void 0;
const BaseCommand_1 = require("./BaseCommand");
class Digits extends BaseCommand_1.BaseCommand {
    // public IsAllDigits(params:string):boolean{
    //     for(let i : number = 0; i < params.length; i++){
    //         if(!/^\d$/.test(params[i])){
    //                 return false
    //         }
    //     }
    //     return true;
    // }
    command_param_string(params) {
        for (let i = 0; i < params.length; i++) {
            if (!/^\d$/.test(params[i])) {
                return false;
            }
        }
        return true;
    }
}
exports.Digits = Digits;
