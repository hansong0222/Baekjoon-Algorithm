/*
문제
정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)
둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

출력
X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.
*/

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let numArr = input[0].split(" ").map(item=>Number(item));
let caseArr = input[1].split(" ").map(item=>Number(item));


solution(numArr[0], numArr[1], caseArr);


function solution(caseNum, chkNum, caseArr){
    let answer = [];
    for(let i=0; i<caseNum; ++i){
        if(caseArr[i] < chkNum){
            answer.push(caseArr[i]);
        }
    }
    
    console.log(answer.join(' '));
}