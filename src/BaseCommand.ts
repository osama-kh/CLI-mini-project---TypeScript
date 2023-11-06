export class BaseCommand{


public command_param_number(params:number):boolean | Promise<void>{
console.log("command base")
return true;
}

public command_param_string(params:string):boolean | Promise<void>{
    console.log("command base")
    return true;
    }

}