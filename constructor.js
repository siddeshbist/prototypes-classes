//new keyword create a JS object

class Color{
	constructor(r,g,,name){
		console.log('Inside Constructor')
		this.r = r;
		this.b = b;
		this.g = g;
		this.name = name;
	}
	greet(){
		return `HELLO FROM ${this.name}!`;
	}
}

const c1 = new Color(255,67,89,'tomoto'); //creating a new object with new keyword of class Color

