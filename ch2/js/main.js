var app = new Vue({
    el : "#app"
    , data : {
        // 이렇게 정의한 message는 변화를 감지할 수 있게 됨
        message : "Vue.js!"
        , message2 : {
            // 객체 데이터
            value: "message2"
        }
        // 배열 데이터
        , list : ["list1", "list2", "list3"]
        , list2 : [
            {id : 1, name:'A', hp : 100}
            ,{id : 2, name:'B', hp : 300}
            ,{id : 3, name:'C', hp : 500}
        ]
        , num : 1
        , scroll : 0
        , count : 0
        , isChild : true
        , isActive : true
        , textColor : '#ff0000'
        , bgColor : '#00ff00'
        , classObject : {
            child:true
            , 'is-active':false
        }
        , styleObject : {
            color:'#ffff00'
            , backgroundColor : '#00ffff'
        }
        , radius : 50
        , ok : false
        , type : 'C'
    }
    , mounted : function(){
        this.scroll = 100 // 요소의 스크롤양 조작하기
    }
    , methods : {
        // 버튼 클릭 시 이벤트 핸들러
        increment : function(){
            this.count+=1;
        }
    }
});