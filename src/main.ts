

class List{
    public constructor(){

    }

    public IsPalindrome(params:Number) :boolean{
        let temp : string ="";
    
        for(let i:number =params.toString().length-1; i>=0; i-- ){
            temp +=params.toString()[i]

        }

        return parseInt(temp)==params;
        
    }

    public IsLower(params:string):boolean{
      let temp : string = params.toLowerCase();
        return params===temp;

    }

    public IsAllDigits(params:string):boolean{

        for(let i : number = 0; i < params.length; i++){
            if(!/^\d$/.test(params[i])){
                    return false
            }
        }
        return true;
    }
    public IsArmstrong(params:number):boolean{
        let temp : string = params.toString();
        const size:number=temp.length;
        let sum:number=0;

        for(let i : number = 0; i < size; i++){
        sum+=Math.pow(parseInt(temp[i]),size);
        }
        return sum==params;
    }

    



}

var list = new List();
// console.log(list.IsPalindrome(5421))
// console.log(list.IsLower("HeLlo"))
// console.log(list.IsLower("kijk"))
// console.log(list.IsAllDigits("12j"))
// console.log(list.IsAllDigits("123"))
console.log(list.IsArmstrong(1234))
console.log(list.IsArmstrong(1634))