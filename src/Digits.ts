import { BaseCommand } from "./BaseCommand";

export class Digits extends BaseCommand{

    // public IsAllDigits(params:string):boolean{

    //     for(let i : number = 0; i < params.length; i++){
    //         if(!/^\d$/.test(params[i])){
    //                 return false
    //         }
    //     }
    //     return true;
    // }

 public command_param_string(params: string ): boolean | Promise<void> {

    for(let i : number = 0; i < params.length; i++){
        if(!/^\d$/.test(params[i])){
                return false
        }
    }
    return true;
 }
}