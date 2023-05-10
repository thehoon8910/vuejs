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
    }
    , methods : {
        // 버튼 클릭 시 이벤트 핸들러
        increment : function(){
            this.count+=1;
        }
        , doAdd : function(){
            // 리스트 내부에서 가장 큰 ID 추출하기
            var max = this.list2.reduce(function(a, b){
                return a > b.id ? a : b.id
            }, 0);
            // 새로운 리스트 요소 추가하기
            this.list2.push({
                id : max+1 // 현재 최대 ID에 +1해서 유니크 ID로 사용
                , name : this.name
                , hp : 400
            });
        }
        , doRemove : function(index){
            // 삭제하기
            this.list2.splice(index, 1);
        }
        , doAttack : function(index){
            // hp 10 하락, hp 0 미만이 되면 해당 리스트 삭제됨
            this.list2[index].hp -= 10;
        }
    }
});