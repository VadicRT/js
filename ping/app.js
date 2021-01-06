

let btn = document.getElementById('send');
btn.addEventListener('click', function() {
	let ping = "<pre>\n            ~\n          -- --\n         (0   0)\n        /   V   \\\n       /(   _   )\\\n         ^^   ^^</pre>";
	let count = document.getElementById('number').value;
	let textArea = document.getElementById('text');
	let numOfPing = "";
	for (let i = 0; i < count; i++) {
		console.log(i);
		numOfPing += ping;
	}
	textArea.innerHTML = numOfPing; 
})