/*
문제
알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

입력
첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

출력
첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
*/
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().toLowerCase();

let arr = new Array(26).fill(0);

let max = 0;

for(let char of input){
    let idx = char.charCodeAt()-97;
    
    arr[idx]++;
    if(max < arr[idx]){
        max = arr[idx];
    }
}

if(arr.indexOf(max) != arr.lastIndexOf(max)){
    console.log("?");
}else{
    console.log(String.fromCharCode(arr.indexOf(max)+65));
}