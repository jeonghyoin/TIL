//멤버 변수와 메소드에 대한 접근 제한(캡슐화)
//IIFE + 클로저
var Counter = (function() {
    //멤버 변수
    var count = 0;
    
    //메소드
	function changeCount(value) {
		count = count + value;
	}
    
    function increase() {
		changeCount(1);
	}
	
	function decrease() {
		changeCount(-1);
	}
	
	function getCount() {
		return count;
	}
    
    //접근 제한
	return {
		increase: increase,
		decrease: decrease,
		getCount: getCount
	};
})();

Counter.increase();
Counter.increase();
console.log(Counter.getCount()); //2

Counter.count = 0;
Counter.decrease();
console.log(Counter.getCount()); //1

//Counter.changeCount(4); //Counter.changeCount is not a function