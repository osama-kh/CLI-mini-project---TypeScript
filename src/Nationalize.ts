import countryISO from './countryISO.json'
import { BaseCommand } from "./BaseCommand";

export class Nationalize extends BaseCommand{
    // public Nationalize (params:string){
    //     return new Promise((resolve,reject)=>{
    //         fetch("https://api.nationalize.io?name="+params+"").then(
    //             response =>{
    //                 if(response.ok) {
    //                 console.log(response.json)
    //                     return response.json();
    //                 }
                    
    //                 throw new Error('Request failed');

    //             }).then(data =>{

    //                let key:String = data["country"][0]["country_id"]
    //                let country2: keyof typeof countryISO = data["country"][0]["country_id"];
    //                 const country_name:string=countryISO[country2]
    //                 const probability:number=data["country"][0]["probability"]*100
    //                 console.log(country_name +" "+ probability.toString()+"%")
                 

                    
    //                 resolve(data);
    //             }).catch(error =>{
    //                 reject(error);
    //             });
                

    //     })

    // }

    public command_param_string(params: string): boolean | Promise<void>{
        return new Promise((resolve,reject)=>{
            fetch("https://api.nationalize.io?name="+params+"").then(
                response =>{
                    if(response.ok) {
                    console.log(response.json)
                        return response.json();
                    }
                    
                    throw new Error('Request failed');

                }).then(data =>{

                   let key:String = data["country"][0]["country_id"]
                   let country2: keyof typeof countryISO = data["country"][0]["country_id"];
                    const country_name:string=countryISO[country2]
                    const probability:number=data["country"][0]["probability"]*100
                    console.log(country_name +" "+ probability.toString()+"%")
                 

                    
                    resolve(data);
                }).catch(error =>{
                    reject(error);
                });
                

        })

    }
}