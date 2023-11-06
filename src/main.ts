
import {Palindrome} from "./palindrome"
import { Nationalize } from "./Nationalize"
import {Lower} from "./Lower"
import {Digits} from "./Digits"
import {Armstrong} from "./Armstrong"
import * as readlineSync from 'readline-sync';

class List{
private key:number = 0;
private operation:any;
private Exit_flag:boolean=true;
    public constructor(){

    }
    private print_result(val:boolean):void{
        console.log("the result is: "+val)
    }


    private print_instruction_list():void{
        console.log("The available commands are:")
        console.log("1 — Palindrome — Check if the input is a palindrome")
        console.log("2 - Lower - Check if all characters in the input are lowercase")
        console.log("3 - Digits - Check if all characters in the input are digits")
        console.log("4 - Armstrong - Check if the input is an 'Armstrong Number'")
        console.log("5 - Nationalize - Check the nationality probability of a given first name        ")
        console.log("6 - Exit - Exit successfully from the application")

// Enter the number of the command: 4
// Enter the input: 371
// The answer is: True

    }


    private print_input():string{
        let param: string = readlineSync.question('Enter the input: ');
        return param;
    }

    public run():void{
 do{
    this.print_instruction_list();

    let key: number = parseInt(readlineSync.question('Enter the number of the command: '));
       switch (key) {
    case 1:
         this.operation =new Palindrome()
         this.print_result(this.operation.command_param_number(parseInt(this.print_input())))

        break;

    case 2:
        this.operation = new Lower()
        this.print_result(this.operation.command_param_string(this.print_input()))

        break;
    case 3:
        this.operation = new Digits()
        this.print_result(this.operation.command_param_string(this.print_input()))

        break;
    case 4:
        
        this.operation = new Armstrong()
        this.print_result(this.operation.command_param_number(parseInt(this.print_input())))

        break;
    case 5:
        this.operation = new Nationalize()
        this.print_result(this.operation.command_param_string(this.print_input()))

        break;
    case 6:
        this.Exit_flag=false
        break;
    default:
        break;
} 
}while(this.Exit_flag)
   
    }

}

var list = new List();
list.run()
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
