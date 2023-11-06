"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countryISO_json_1 = __importDefault(require("./countryISO.json"));
class List {
    constructor() {
    }
    IsPalindrome(params) {
        let temp = "";
        for (let i = params.toString().length - 1; i >= 0; i--) {
            temp += params.toString()[i];
        }
        return parseInt(temp) == params;
    }
    IsLower(params) {
        let temp = params.toLowerCase();
        return params === temp;
    }
    IsAllDigits(params) {
        for (let i = 0; i < params.length; i++) {
            if (!/^\d$/.test(params[i])) {
                return false;
            }
        }
        return true;
    }
    IsArmstrong(params) {
        let temp = params.toString();
        const size = temp.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            sum += Math.pow(parseInt(temp[i]), size);
        }
        return sum == params;
    }
    // function getData() {
    //     return new Promise((resolve, reject) => {
    //       fetch('https://example.com/data')
    //         .then(response => {
    //           if (response.ok) {
    //             return response.json();
    //           }
    //           throw new Error('Request failed');
    //         })
    //         .then(data => {
    //           resolve(data);
    //         })
    //         .catch(error => {
    //           reject(error);
    //         });
    //     });
    //   }
    Nationalize(params) {
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
var list = new List();
// console.log(list.IsPalindrome(5421))
// console.log(list.IsLower("HeLlo"))
// console.log(list.IsLower("kijk"))
// console.log(list.IsAllDigits("12j"))
// console.log(list.IsAllDigits("123"))
// console.log(list.IsArmstrong(1234))
// console.log(list.IsArmstrong(1634))
console.log(list.Nationalize("Yuval"));
