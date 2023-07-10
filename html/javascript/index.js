//script 태그 제외하고 안에 있는 내용을 쓰면 됨. 
console.log("helloworld")

//변수란 특정값을 저장하는 공간 
//abc = "abcedfghijklmnopqrstuvwxzy" abc에 모든 알파벳을 보관하겟다

// 키워드 변수이름 = 값
// 키워드: var, let, const

//선언+할당
var number = 5; //선언+할당

var number; // 변수를 선언
number = 5; //변수에 값을 할당
number = 6; //재할당

let string = "가나다"; //문자열은 따옴표로 처리해줘야함
string = "마바사"; //재할당 가능
//같은 변수이름을 다시선언은 불가능
//let string= "아아아"; 불가
console.log(string)


const string2="rkrkrk";
//string2="aaa"; 이렇게 재할당하면 오류뜸.

let string4;
//선언시 숫자가 오면안됨

console.log(111)


//var: 재선언, 재할당 가능 . 덮어쓰기가 되기때문에 오류날 확률 큼. let을 권장
//let: 재선언 불가능, 재할당 가능
//const: 재선언 불가, 재할당 불가, 선언과 할당 한줄로해야함

//각 변수는 할당된 공간(scope)이 있음. 함수 안에서 변수를 선언하면 이 변수는 함수 안에서만 사용가능함. 그런데 var는 스코프를 무시하는 경향이 있음.



var number=1; //숫자라는 자료형
var string3='aaaa'; //문자라는 자료형

//문자열 선언 및 할당
//'',"",``
let hihi=`안녕하세요 ${string3}입니다.`;
console.log(`안녕하세요 ${string3}입니다.`)
console.log(hihi)
//백틱 안에서 $()를 쓰면 $()안은 js언어(변수)를 쓰겠다는 뜻

let hi= "안녕하세요"+ string3+"입니다"; //옛날방식.
console.log(hi)

let names=['마아송','이영경','심재운']

console.log(names.length)//배열의 길이


names.push('짱아')//배열의 마지막에 값을 추가
console.log("push", names)

names.pop()//배열의 마지막 값을 삭제
console.log("pop",names)

names.unshift("짱구")//배열 가장 앞의 값을 추가
console.log("unshift",names)

names.shift()//배열 가자 앞의 값을 삭제
console.log("shift",names)

//값을 찾는 두가지 방법
let index=names.indexOf("짱아")//값이 몇번 인덱스에 위치해 있는지
console.log(index)//만약 값이 없으면 -1출력

names.includes("짱아")//값이 포함되어 있는지 판별
let isIncludes=names.includes("짱아")
console.log(isIncludes)

let rainbow=['red','orange','yellow','green','blue','navy','purple'];
console.log(rainbow[2])

rainbow.push('pink');
console.log(rainbow);

let black= rainbow.indexOf('black');
console.log(black)

rainbow.reverse();
console.log(rainbow)