var arr = new Array();
arr.push("안녕하세요");
arr.push("오늘은 화요일입니다");
arr.push("우리는 랜덤함수를 공부하고 있어요");
arr.push("이제 점심시간이 다가오네요");
arr.push("오늘도 화이팅!!!!");

// setInterval 을 1초마다 위의 문자열중 한개씩 돌아가며 출력되도록 프로그램을 작성해주세요

setInterval(function() {
    let random = parseInt(Math.random() * 5);
    console.log(arr[random]); 
}, 1000)
