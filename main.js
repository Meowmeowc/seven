// let btn = document.querySelector('.btn')

// btn.onclick = () => {
// 	document.getElementById('text').innerHTML = '<h1>A</h1>'
// }

let op;

function func() {
	let result;
	let num1 = Number(document.getElementById('num1').value)
	let num2 = Number(document.getElementById('num2').value)
	switch (op) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;
	}
	document.getElementById("result").innerHTML = result;
}
