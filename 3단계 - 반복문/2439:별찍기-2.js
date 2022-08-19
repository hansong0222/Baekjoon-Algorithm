/*
문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
*/

/*
//for문을 이용한 방법
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();
input = Number(input);

let star = '';
let blank = '';

for(let i=1; i<=input; ++i){  
    blank = '';
    star += "*";

    for(let j=0; j<input-i; ++j){
        blank += ' ';
    }

    console.log(blank + star);
}
*/

//join을 이용한 방법
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();
let n = Number(input);

let starArray = Array.from({length: n}, () => ' '); // 모든 칸을 빈칸으로 초기화하기

for(let i = n-1; i >= 0; i--) { // 맨 뒤부터 1씩 감소시키며 * 대입하기
    starArray[i] = '*'; 
    console.log(starArray.join('')); // 현재 모든 값이 배열형태로 되어있으므로, join을 통해 하나의 문자열로 만들어주기
}


