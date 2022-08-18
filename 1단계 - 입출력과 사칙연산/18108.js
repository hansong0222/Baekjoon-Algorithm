const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString();
let num = Number(input);


console.log(num - 543);