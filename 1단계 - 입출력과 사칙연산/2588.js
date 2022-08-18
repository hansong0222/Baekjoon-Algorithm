const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n").map(item => Number(item));
let num = [];

for(var i=0; i<3; i++){
    num.push(Number(input[1].toString().substr(i,1)));
}

//결과 출력
for(var i=2; i>=0;i--){
    console.log(input[0] * num[i]);
}

console.log(input[0] * input[1]);