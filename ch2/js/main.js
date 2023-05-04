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
        , num : 1
    }
});