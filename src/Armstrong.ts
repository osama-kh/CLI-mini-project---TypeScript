
import { BaseCommand } from "./BaseCommand";

export class Armstrong extends BaseCommand{

    // private IsArmstrong(params:number):boolean{
    //     let temp : string = params.toString();
    //     const size:number=temp.length;
    //     let sum:number=0;

    //     for(let i : number = 0; i < size; i++){
    //     sum+=Math.pow(parseInt(temp[i]),size);
    //     }
    //     return sum==params;
    // }

public command_param_number(params: number): boolean | Promise<void> {
    let temp : string = params.toString();
    const size:number=temp.length;
    let sum:number=0;

    for(let i : number = 0; i < size; i++){
    sum+=Math.pow(parseInt(temp[i]),size);
    }
    return sum==params;}

}