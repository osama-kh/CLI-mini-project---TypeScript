"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nationalize = void 0;
const countryISO_json_1 = __importDefault(require("./countryISO.json"));
const BaseCommand_1 = require("./BaseCommand");
class Nationalize extends BaseCommand_1.BaseCommand {
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
    command_param_string(params) {
        return new Promise((resolve, reject) => {
            fetch("https://api.nationalize.io?name=" + params + "").then(response => {
                if (response.ok) {
                    console.log(response.json);
                    return response.json();
                }
                throw new Error('Request failed');
            }).then(data => {
                let key = data["country"][0]["country_id"];
                let country2 = data["country"][0]["country_id"];
                const country_name = countryISO_json_1.default[country2];
                const probability = data["country"][0]["probability"] * 100;
                console.log(country_name + " " + probability.toString() + "%");
                resolve(data);
            }).catch(error => {
                reject(error);
            });
        });
    }
}
exports.Nationalize = Nationalize;
