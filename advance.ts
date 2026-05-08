//type assertion 

let data :any ="bangladesh"
let length0fData=(data as string).length;
//console.log(length0fData)

//type alias

type User ={
name:string;
ahe:number;
}


//array 

const name1:string[]=["rahim","karim","salim"]
const age1:number[]=[25,30,35]

name1.push("jamal");
console.log(name1)


// [name, age, isActive]
const user: [string, number, boolean] = ["Rahim", 22, true];

//  Correct order matters!
user[0] // "Rahim" → string
user[1] // 22 → number

// Wrong order = error
//const wrong: [string, number] = [22, "Rahim"]; // Error!
