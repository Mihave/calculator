function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let racun = {
    prvi: '',
    operacija: '',
    drugi: '',
}

let text = ''
const display = document.querySelector('#display');
display.textContent = text;

const btnAC = document.querySelector('.ac');
btnAC.addEventListener('click', () => {
    text = '';
    display.textContent = text;
    racun = {
        prvi: '',
        operacija: '',
        drugi: '',
    }
})

const btnDEL = document.querySelector('.del');
btnDEL.addEventListener('click', () => {
    text = String(text).slice(0, -1);
    display.textContent = text;
    if (racun.operacija.length === 0) {
        racun.prvi = racun.prvi.slice(0, -1);
    } else if (racun.drugi.length === 0) {
        racun.operacija = '';
    } else {
        racun.drugi = racun.drugi.slice(0, -1);
    }
})

const nums = document.querySelectorAll('.num');
nums.forEach((num) => (num.addEventListener('click', () => {
    display.textContent += String(num.textContent);
    if (racun.operacija.length === 0) {
        racun.prvi += num.textContent;
    } else {
        racun.drugi += num.textContent;
    }
})))

const ops = document.querySelectorAll('.op');
ops.forEach((op) => (op.addEventListener('click', () => {
    if (racun.operacija.length === 0) {
        display.textContent += String(op.textContent);
        racun.operacija = op.textContent;
    } else {
        racun.prvi = operate(racun);
        racun.operacija = op.textContent;
        racun.drugi = '';
        text = racun.prvi + racun.operacija;
        display.textContent = text;
    }
})))

const eq = document.querySelector('.eq');
eq.addEventListener('click', () => {
    let r = operate(racun).toFixed(3);
    racun.prvi = String(r);
    racun.operacija = '';
    racun.drugi = '';
    text = r;
    display.textContent = text;
})

const dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
    if (racun.operacija.length === 0) {
        if (!racun.prvi.includes('.')) {
            racun.prvi += '.';
            display.textContent += '.';
        }
    } else {
        if (!racun.prvi.includes('.')) {
            racun.prvi += '.';
            display.textContent += '.';
        }
    }
})

function operate(racun) {
    racun.prvi = parseFloat(racun.prvi);
    racun.drugi = parseFloat(racun.drugi);
    let res = 0

    if (racun.operacija == 'x') {
        res = racun.prvi * racun.drugi;
    } else if (racun.operacija == '/') {
        res = racun.prvi / racun.drugi;
    } else if (racun.operacija == '+') {
        res = racun.prvi + racun.drugi;
    } else if (racun.operacija == '-') {
        res = racun.prvi - racun.drugi
    }
    return res
}