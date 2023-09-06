/*primitive
7 types string, number ,boolean, null, undefined, symbol, bigint
*/
let num = 35;
let num2 =35.555;
let str ="NodeJS";
let end =null;
let undef;
let bigNum = 2132141n;
let islogin = true;
// const id = symbol('kk');
// const id2 = symbol('kk');

console.table([typeof(num),typeof(num2),typeof(str),typeof(end),typeof(undef)]);

/* NON-PRIMITIVE
Array , Object , Functions
*/

const hero = ["superman","batman","aquaman","flash"];
let myobj = {
    name : "Tusharsing",
    age : 17,
}


const fun = function(){
    console.log("Hello World");
}