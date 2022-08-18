const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

//한줄입력
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');



input = input.split('\n');

const testCaseNum = +input[0];
for(let i=1; i<=testCaseNum; ++i){
    //1
    const arr = input[i].split(' ').map((item) => Number(item));
    
    //2
    //const arr = input[i].split(' ');
    // let newArr = [];
    // for(let i=0; i<arr.length; ++i){
    //     newArr.push(+arr[i]);
    // }

    console.log('arr : ', arr);
    //console.log('newarr : ', newArr);
    break;
}



function solution(){
    
}