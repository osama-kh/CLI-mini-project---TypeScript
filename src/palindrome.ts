import { BaseCommand } from "./BaseCommand";
export class Palindrome extends BaseCommand{
    // public IsPalindrome(params:Number) :boolean{
    //     let temp : string ="";
    
    //     for(let i:number =params.toString().length-1; i>=0; i-- ){
    //         temp +=params.toString()[i]

    //     }

    //     return parseInt(temp)==params;
        
    // }
    public command_param_number(params: number): boolean | Promise<void> {
        let temp : string ="";
    
        for(let i:number =params.toString().length-1; i>=0; i-- ){
            temp +=params.toString()[i]

        }

        return parseInt(temp)==params;
        
    }

}