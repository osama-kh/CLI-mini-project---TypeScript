
import {Palindrome} from "./palindrome"
import { Nationalize } from "./Nationalize"
import {Lower} from "./Lower"
import {Digits} from "./Digits"
import {Armstrong} from "./Armstrong"

class List{
private key:number = 0;
private operation:any;
    public constructor(){

    }
    private print_result(val:boolean):void{
        console.log("the result is: "+val)
    }


    private print_instruction_list():void{

    }
    public run(key:number):void{


       switch (key) {
    case 1:
         this.operation =new Palindrome()
         this.print_result(this.operation.command_param_number(132))

        break;

    case 2:
        this.operation = new Lower()
        this.print_result(this.operation.command_param_string("HeLlo"))

        break;
    case 3:
        this.operation = new Digits()
        this.print_result(this.operation.command_param_string("123"))

        break;
    case 4:
        this.operation = new Armstrong()
        this.print_result(this.operation.command_param_number(1634))

        break;
    case 5:
        this.operation = new Nationalize()
        this.print_result(this.operation.command_param_string("Yuval"))

        break;
    case 6:

        break;
    default:
        break;
} 
    }

}

var list = new List();
list.run(1)
list.run(2)
list.run(3)
list.run(4)
list.run(5)
// list.run(1)
// console.log(list.IsPalindrome(5421))
// console.log(list.IsLower("HeLlo"))
// console.log(list.IsLower("kijk"))
// console.log(list.IsAllDigits("12j"))
// console.log(list.IsAllDigits("123"))
// console.log(list.IsArmstrong(1234))
// console.log(list.IsArmstrong(1634))
// console.log(list.Nationalize("Yuval"))
