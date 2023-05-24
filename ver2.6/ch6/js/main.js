// svg 트랜지션 컴포넌트 정의
Vue.component('my-circle', {
    template : '<circle cx="80" cy="75" r="50" :fill="fill"></circle>'
    , props : { fill : String }
});

new Vue({
    el : "#app"
    , data : {
        show : true
        , show2 : true
        , show3 : true
        , count : 0
        , toggle : false
    }
    , computed : {
        fill : function(){
            return this.toggle ? 'lightPink':'skyBlue'
        }
    }
});