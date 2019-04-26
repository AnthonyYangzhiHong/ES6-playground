/*var tmp = new Date();

function f() {
	console.log(tmp);
	if(false) {
		var tmp = 'hello world';
	}
}

f();*/

/*if(true){
	const name = 'Anthony'
}

console.log(name);*/

console.log(this);

function logFunction(){
	console.log(this);
}

logFunction();