var app = new Vue({
    el : "#app"
    , data : {
        message : "Vue.js 시작!"
        , list : ["리스트1", "리스트2", "리스트3"]
        , show : true
    }
    , computed : {
        computedMessage : function(){
            // 어떤 처리를 해서 결과 리턴하기
            return this.message + "!"
        }
    }
    , created : function(){
        // 이 인스턴스의 생성과 초기화가 종료되었을 때
        console.log("created");
    }
    , methods : {
        handleClick:function(e){
            alert(e.target);
        }
    }
});