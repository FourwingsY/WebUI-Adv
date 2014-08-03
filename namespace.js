/*
 * namespace란
 * 함수나 변수의 이름이 겹치지 않게 하기 위해
 * 함수나 변수를 특정 오브젝트 내부에 담아두는 것.
 */

// 사용법 1. 오브젝트에 담아두기
var foo = {};
foo.name = "Spock";
foo.greeting = function() {
	return "Hello " + foo.name;
}

// 사용법 2. 오브젝트 안에서 선언하기
var foo = {
	name: "Spock",
	greeting: function() {
		return "Hello " + foo.name;
	}
};

// 사용법 3. 즉시실행함수 사용하기
var foo = (function(){
 
	// Create a private variable
	var name = "Spock";
 
	// Create a private function
	var greeting = function() {
		return "Hello " + name;
	};
 
	// Return an object that exposes our greeting function publicly
	return {
		greeting: greeting
	};
 
})();

// copied from http://blog.stannard.net.au/2011/01/14/creating-namespaces-in-javascript/