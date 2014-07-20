var name = "John";

function callName(name) {
	console.log("Hey, " + name);
}

function Person(name) {
	this.name = name;
	this.sayName = function() {
		callName(this.name);
	} 
}

var smith = new Person("Smith")

callName(name); 	// Hey, John	// this is window
smith.sayName();	// Hey, smith 	// this is smith
// these examples are ok, but

var heySmith = smith.sayName; // in this case
heySmith();			// Hey, John	// this is window
/*
 * heySmith is just same as
 * heySmith = function() {
 *   callName(this.name)
 * }
 *
 * and "this" is window.
 * because, it is not a function in smith,
 * now it's global funtion.
 */

heySmith.call(smith);	// Hey, Smith 	// this is smith
/*
 * if you want to see "Hey, Smith" then
 * you should to call with smith-context.
 */

function greetThis(greetings) {
	console.log(greetings + ", " + this.name);
}

greetThis("Hello");					// Hello, John	// this is window
greetThis.call(smith, "Hello");		// Hello, Smith // this is smith
greetThis.apply(smith, ["Hello"]); 	// Hello, Smith // this is smith
 /*
  * apply is little bit different from call
  * arguments should be transffered by array.
  */
