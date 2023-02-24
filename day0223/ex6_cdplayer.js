$(function(){
    // h1.title 클릭시 음악 목록이 나오도록 한다
    $("h1.title").click(function(){
        $("ul.music-list").slideDown("slow");
    });

    // 곡 선택시 이벤트
    $("ul.music-list li").click(function(){
        // 노래 제목을 얻어서 h1.title 에 넣기
        $("h1.title").text($(this).text());
        $(this).parent().slideUp("slow");

        // class 를 얻어서 #cd 에 class로 추가
        let selcd = $(this).attr("class");
        // $("#cd").attr("class", $(this).attr("class"));

        // cd가 change되는 효과를 주기 위해서 animate 사용
        $("#cd").animate({"width":"0"}, 'slow'), $("ul.music-list li").click(function(){
            // cd변경
            $("#cd").attr("class", selcd);
            // 다시 너비 조절
            $(this).animate({"width" : "300"}, "slow");
        });


    });
});