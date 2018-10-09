var screen = document.getElementById('screen').innerHTML;
var shouldReplaceScreen = false;
var operator, operand_1, operand_2;

function updateScreen () {
    var screenUpdate = document.getElementById('screen');
    screenUpdate.innerText = screen;
}
function concatToScreen(char) {
    if (shouldReplaceScreen || screen === '0') {
        shouldReplaceScreen = false;
        screen = String(char);
        updateScreen();
        return;
    }
    screen += String(char);
    updateScreen();
}

function onClickDigits(char) {
    concatToScreen(char);
}

function onClickOperator() {
    if (shouldReplaceScreen) return;
    operand_1 = screen;
    shouldReplaceScreen = true;
}

function plus(a, b) {
    return (+a) + (+b);
}

function onClickPlus() {
    onClickOperator();
    operator = plus;
}

function multiply(a, b) {
    return a * b;
}

function onClickMultiply() {
    onClickOperator();
    operator = multiply;
}

function minus(a, b) {
    return a - b;
}
function onClickMinus() {
    onClickOperator();
    operator = minus;
}

function division(a, b) {
    return a / b;
}
function onClickDivision() {
    onClickOperator();
    operator = division;
}

function onClickNegetive() {
    screen = -(+screen);
    updateScreen();
}
function percent (a, b) {
    return a * b / 100;
}
function onClickPercent() {
    onClickOperator();
    operator = percent;
}

function onClickEqual() {
    operand_2 = screen;
    screen = String(operator(operand_1, operand_2));
    updateScreen();
}
function onClickClear() {
    screen = 0;
    updateScreen();
    operand_1 = '';
    operand_2 = '';
    operator = '';
    shouldReplaceScreen = true;
}