let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(" ").map(item => Number(item));

console.log(input);

let origin = [1, 1, 2, 2, 2, 8];
let result = origin.map((item, idx) => item - input[idx]);

console.log(result);




