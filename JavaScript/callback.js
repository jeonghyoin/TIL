//콜백, 비동기
function square(x, callback) {
    //function, milliseconds
    //3번째 parameter부터는 setTimeout에서 호출하는 function의 parameter로 전달
    setTimeout(callback, 1000, x*x); //2*2=4
}
 
square(2, function(number) { //x*x
    console.log('곱: ' + number);
});


//콜백 함수는 클로저이다.
//case 1
function callbackFunc(callback) {
    callback();
}

function testFunc() {
    var text = "callback function is closure";
    callbackFunc(function() {
        console.log(text);
    });
}

testFunc();


//case 2
function callbackA(callback) {
    //콜백 함수가 클로저이기 때문에 sum 변수를 참조할 수 있다. 
    callback();
}

function add(x, y) {
    var sum = x + y;
    callbackA(function() { //익명 함수(콜백 함수)를 넘김
        console.log('합: ' + sum);
    })
}

add(3, 5);


//this 객체에 주의
var obj = {
    name: 'hi',
    setName: function(name) {
        this.name = name;
    }
}

function callbackB(name, cb) {
    //cb(name); //hi 출력 - this가 전역 객체인 window를 가리킨다.
    cb.call(obj, name); //hello 출력 - call, apply를 이용하여 명확히 해주어야 함(사용할 객체가 obj라고 명시)
}

callbackB('hello', obj.setName);
console.log(obj.name);


//콜백 지옥 - promise 사용하여 해결하기
function add2(x, callback){ //callback 인자는 add 함수
    let sum = x + x;
    callback(sum);
}

add2(3, function(result) { //매개변수로 함수 넘긴다
    add2(result, function(result2) {
        add2(result2, function(result3) {
            add2(result3, function(result4) {
                //result4 = 48
                console.log('콜백 지옥');
            })
        })
    })
})