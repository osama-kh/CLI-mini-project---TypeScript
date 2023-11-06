import { BaseCommand } from "./BaseCommand";

export class Lower extends BaseCommand{
    // public IsLower(params:string):boolean{
    //     let temp : string = params.toLowerCase();
    //       return params===temp;
  
    //   }
public command_param_string(params: string): boolean | Promise<void>{
    let temp : string = params.toLowerCase();
    return params===temp;

}




}