/*
문제
대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.

입력
첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

출력
각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
*/

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let caseNum = +input[0];

for(let i=1; i<=caseNum; ++i){
    let caseArr = input[i].split(" ").map(x=>Number(x));
    solution(caseArr);
}


function solution(caseArr){
    let n = caseArr[0]; //배열의 첫번째 값은 케이스의 크기
    
    let sum = caseArr.reduce((acc, currValue) => acc+=currValue,0);
    let avg = (sum-caseArr[0])/n; //첫번째 값을 제외한 배열의 평균값
    let cnt = 0;

    for(let i=1; i<=n; ++i){
        if(caseArr[i]>avg){
            cnt++;
        }
    }

    console.log((cnt/n*100).toFixed(3) + "%");
}
