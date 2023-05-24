var app = new Vue({
    el : "#app"
    , data : {
        width:800
        , height:600
        , budget : 300 // 입력 양식에 출력할 데이터
        , limit : 2 // 출력할 개수
        , list : [
            {id : 1, name : 'A', price : 100}
            , {id : 2, name : 'B', price : 200}
            , {id : 3, name : 'C', price : 400}
            , {id : 4, name : 'D', price : 300}
            , {id : 5, name : 'E', price : 500}
        ]
        // 필터로 텍스트 변화 처리
        , price : 19800
        // nextTick
        , hList : []
    }
    , computed : {
        halfWidth : {
            get:function(){
                return this.width/2
            }
            , set : function(val){
                this.width = val * 2
            }
        }
        , halfHeight : function(){
            return this.height / 2;
        }
        , halfPoint : function(){
            return {
                x : this.halfWidth
                , y : this.halfHeight
            }
        }
        , computedData : function() { return Math.random() }
        , matched : function(){
            // budget 아래의 리스트를 리턴하는 산출 속성
            return this.list.filter(function(el){
                return el.price <= this.budget
            }, this);        
        }
        , limited : function(){
            // matched로 리턴한 데이터를 limit 조건을 걸어 리턴하는 산출 속성
            return this.matched.slice(0, this.limit)
        }
    }
    , methods : {
        methodsData : function() { return Math.random() }
    }
    , filters : {        
        localeNum : function(val){
            // 로컬필터
            return val.toLocaleString();
        }
        , round : function(val){
            return Math.round(val*100)/100
        }
        , radian : function(val){
            return val*Math.PI/180
        }
    }
    , directive : {
        focus : {
            // 연결되어 있는 요소가 DOM에 추가될 때
            inserted : function(el){
                el.focus(); // 요소가 렌더링될 때 자동으로 초점을 맞춤
            }
        }
    }
    , watch : {
        hList : function(){
            this.$nextTick(function(){
                console.log('nextTick : ' + this.$refs.hList.offsetHeight);
            })
        }
    }
   
});