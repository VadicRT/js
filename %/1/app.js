

let btn = document.getElementById('send');
btn.addEventListener('click', function() {
	let apples = document.getElementById('apple').value;
	let children = document.getElementById('child').value;
	let output = document.getElementById('text');

	let calc = (+apples - (+apples % +children)) / children;
	output.innerHTML = calc;
})
