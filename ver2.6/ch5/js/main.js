// 컴포넌트 로컬 등록
var myComponent = {
    template: '<p>컴포넌트</p>'
};

// 부모 자식 컴포넌트
Vue.component('comp-child', {
    template : '<p>{{val}}</p>'
    , props : ['val']
});

// 컴포넌트에 속성 부여
Vue.component('par-child', {
    template : '<p id="childA" class="childB">컴포넌트 속성 부여, id : childA, class : childB</p>'
});

// 컴포넌트를 리스트 렌더링
Vue.component('list-child', {
    template : '<li>{{name}} hp. {{hp}}</li>'
    , props : ['name', 'hp']
});

// 자식 이벤트를 부모에서 잡기
Vue.component('child-event', {
    template : '<button @click="handleClick">이벤트 호출</button>'
    , methods : {
        handleClick : function(){
            this.$emit('childs-event');
        }
    }
});

// 부모가 가진 데이터 조작
Vue.component('par-control', {
    template : '<li>{{name}} HP.{{hp}} <button @click="doAttack">공격하기</button></li>'
    , props : {id : Number, name : String, hp : Number} // 자료형 지정
    , methods : {
        doAttack : function(){
            this.$emit('attack', this.id);
        }
    }
});

// 컴포넌트의 v-model
/*
Vue.component('my-calendar', {
    model : {
        prop: 'current' // 현재 값을 value가 아닌 current로 할당하고 싶은 경우
        , event : 'change' // 이벤트를 change로 사용하고 싶은 경우
    }
    , props : { current : String }
    , created : function(){
        this.$emit('change', '2023-01-01');
    }
});
*/

// .sync로 양방향 데이터 바인딩
Vue.component('sync-component', {
    template : '<div class="sync-component"><p>이름.{{name}} hp.{{hp}}</p><p>이름 <input v-model="localName"></p><p>HP <input size="5" v-model.number="localHp"></p></div>'
    , props : {
        name : String
        , hp : Number
    }
    , computed : {
        localName : {
            get: function(){ return this.name }
            , set : function(val) { this.$emit('update:name', val) }
        }
        , localHp : {
            get : function(){ return this.hp }
            , set : function(val){ this.$emit('update:hp', val) }
        }
    }
});

new Vue({
    el : "#app"
    , components : {
        'my-component' : myComponent
    }
    , data : {
        list : [
            {id : 1, name : 'A', hp : 100}
            ,{id : 2, name : 'B', hp : 300}
            ,{id : 3, name : 'C', hp : 500}
        ]
        , name : 'syncName'
        , hp : 100
    }
    , methods : {
        parentsMethod : function(){
            alert("이벤트를 받았습니다.");
        }
        , handleAttack : function(id){
            // attack이 발생한 경우 매개변수 ID로 요소 검색
            var item = this.list.find(function(el){
                return el.id === id;
            });
            if(item != undefined && item.hp > 0) item.hp -= 10;
        }
    }
});