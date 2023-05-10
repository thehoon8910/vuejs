var app = new Vue({
    el : "#app"
    , data : {
        message : 'Vue.js'
        , message2 : 'Hello'
        , val : true
        , val2 : []
        , val3 : []
        , val4 : ''
        , val5 : []
        , val6 : 50
        , scrollY : 0
        , timer : null
    }
    , created : function() {
        // 스크롤 이벤트 핸들러 등록
        window.addEventListener('scroll', this.handleScroll);
    }
    , methods : {
        handleClick : function(){
            alert("클릭 이벤트 발생");
        }
        , handleInput : function(event){
            // 할당 전에 어떤 처리하기
            this.message = event.target.value
        }
        , handler : function(com){
            console.log(com);
        }
        , handleScroll : function(){
            if(this.timer == null){
                this.timer = setTimeout(function(){
                    this.scrollY = window.scrollY;
                    clearTimeout(this.timer);
                    this.timer = null;
                }.bind(this), 200)
            }
        }
    }
});