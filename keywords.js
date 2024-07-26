num = 256
console.log(num)

let num1 = 246
console.log(num1);
// console.log(typeof num1);

var num2 = 132
console.log(num2);
// console.log(typeof num2);

const num3 = 234
console.log(num3);

// const num3 = 93
// console.log(num3);

//let and const are blocked scope
// var is a global scope

{
    let c = 23;
    const i = 334
    var a = 93;
    console.log(c);
    console.log(i);
    console.log(a);
}

console.log(a);

// only var value can be reassigned 
// let cannot be reassigned

n = 344;
if (n%2 === 0) {
    console.log("even");
    global = "this should be global"
    let nature = "good"
    // console.log(global);
    console.log(nature);
    const ab = 933
    console.log(ab);
}
else{
    console.log("odd");
}
console.log(global);


