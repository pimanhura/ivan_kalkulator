const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
	calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value);
		updateScreen(curentNumber);
	});
});


let prevNumber = '';
let calculationOperator = '';
let curentNumber = '0';

const inputNumber = (number) => {
	if (curentNumber === '0') {
		curentNumber = number;
	}else {
		curentNumber += number;
	}
}


const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value);
	});
});


const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = curentNumber;
	}
	calculationOperator = operator;
	curentNumber = '0';
}


const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
	calculate();
	updateScreen(curentNumber);
});



const calculate = () => {
	let result = '';
	switch(calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(curentNumber);
			break;
		case "-":
			result = prevNumber - curentNumber;
			break;
		case "*":
			result = prevNumber * curentNumber;
			break;
		case "/":
			result = prevNumber / curentNumber;
			break;
		default:
			break;
	}
	curentNumber = result;
	calculationOperator = '';
}



// Melakukan hapus data
const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	curentNumber = '0';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
	clearAll();
	updateScreen(curentNumber);
});



// melakukan fungsi desimal
inputDecimal = (dot) => {
	if (curentNumber.includes('.')) {
		return;
	}
	curentNumber += dot;
}


const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value);
	updateScreen(curentNumber);
});