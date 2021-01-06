

let btn = document.getElementById('send');
btn.addEventListener('click', function() {
	let name = document.getElementById('name').value;
	let textArea = document.getElementById('text');
	textArea.innerHTML = `Привіт, ${name}!`;
})