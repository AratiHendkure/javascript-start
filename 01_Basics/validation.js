const rollNo = 1234;
let nameS = "Arati";
var age = 22;
income = 60000;

// rollNo = 234;

nameS = "Arati Hendkure";
age = 21;
income = 12000

console.table([rollNo,nameS,age,income])


const addition = () =>{
    var a = 20;
    var b = 30;

    let c = a+b;
   
    return console.log(c),60,a;
}



const forLoop = () =>{
    let a = 20
    let b = 10
for (let i = 1; i<=a; i++){
    if (i%2 == 0){
        console.log(i)
    }
}
 return b;
}

let sentence = "Hellow I am Arati ";
count = 0


console.log(forLoop())
console.log(addition());

for (let i=0;  sentence[i]!==undefined;i++){
    count++
    
}
console.log("total number of character",count)



for(let i = 0; i<=10 && i>=0; i++){
    let a = 3*i
    console.log (`3 x ${i} = ${a}`);
}
return 0;


