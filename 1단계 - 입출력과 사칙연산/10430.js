const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map((item) => Number(item));

let A = input[0];
let B = input[1];
let C = input[2];

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);