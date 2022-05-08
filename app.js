'use strict';

const operation = document.getElementById("operation");
const result = document.getElementById("result");

const tema = localStorage.getItem('tema');
if (tema) {
    themeChange(tema);
}
document.querySelector('.ball').addEventListener('click', (e) => {
    e.target.classList.toggle('ball-move');
    if (document.body.className == 'light-theme') {
        localStorage.setItem('tema', 'dark-theme');
        themeChange('dark-theme');
    } else {
        localStorage.setItem('tema', 'light-theme');
        themeChange('light-theme');
    }

});


function themeChange(tema) {
    document.body.className = tema
    const ball = document.querySelector('.ball');

    if (tema == 'dark-theme') {
        ball.classList.add('ball-move');
    } else
    if (tema == 'light-theme') {
        ball.classList.remove('ball-move');
    }
};

function show(param) {
    if (result.innerHTML == 0) {
        result.innerText = param;
    } else {
        result.innerText += param;
    }

}

function clickResult() {
    let operationContent = result.innerText;
    operation.innerText = operationContent;

    operationContent = operationContent.replace('x', '*');
    operationContent = operationContent.replace('÷', '/');
    result.innerText = eval(operationContent);
}

function clickAC() {
    result.innerText = '0';
}

function clickDel() {
    if (result.innerText.length > 1) {
        result.innerText = result.innerText.substring(0, result.innerText.length - 1);
    } else {
        result.innerText = '0';
    }
}