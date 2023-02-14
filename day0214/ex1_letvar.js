// var = 함수형 변수
// let = 영역형 변수

var a = 1; // 변수 a 새로 생성
let b = 2; // 변수 b 새로 생성

// 사용자 함수  = 호출을 해야 실행이 됨
function test1() {
    var a = 3; // 변수 a 새로 생성, 전역변수 a 와 전혀 다른 변수로 생성
    let b = 4; // 변수 b 새로 생성

    if(true) {
        var a = 5; // 9번 라인의 a변수에 덮어씀
        let b = 6; // 새로 생성
        console.log(`a = ${a}, b = ${b}`); // 5, 6
    }
    console.log(`a = ${a}, b = ${b}`); // 5, 4
}

// 함수호출
test1();
console.log(`a = ${a}, b = ${b}`); // 1  2 
