var app = new Vue({
    el : "#app"
    , data : {
        message : "Vue.js 시작!"
        , list : ["리스트1", "리스트2", "리스트3"]
        , show : true
    }
    , methods : {
        handleClick:function(e){
            alert(e.target);
        }
    }
});