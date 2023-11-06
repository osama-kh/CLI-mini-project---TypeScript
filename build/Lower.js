"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lower = void 0;
const BaseCommand_1 = require("./BaseCommand");
class Lower extends BaseCommand_1.BaseCommand {
    // public IsLower(params:string):boolean{
    //     let temp : string = params.toLowerCase();
    //       return params===temp;
    //   }
    command_param_string(params) {
        let temp = params.toLowerCase();
        return params === temp;
    }
}
exports.Lower = Lower;
