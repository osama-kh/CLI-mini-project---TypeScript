"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armstrong = void 0;
const BaseCommand_1 = require("./BaseCommand");
class Armstrong extends BaseCommand_1.BaseCommand {
    // private IsArmstrong(params:number):boolean{
    //     let temp : string = params.toString();
    //     const size:number=temp.length;
    //     let sum:number=0;
    //     for(let i : number = 0; i < size; i++){
    //     sum+=Math.pow(parseInt(temp[i]),size);
    //     }
    //     return sum==params;
    // }
    command_param_number(params) {
        let temp = params.toString();
        const size = temp.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            sum += Math.pow(parseInt(temp[i]), size);
        }
        return sum == params;
    }
}
exports.Armstrong = Armstrong;
