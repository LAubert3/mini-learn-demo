var dingSound = new Audio("./sounds/ding.mp3");
var noSound = new Audio("./sounds/no.mp3");
let isExpanded = false;
let isExpanded2 = false;
const blank = '';

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        inputF();
    }
});

//eButton
const eButton = document.querySelector('.e-button');
eButton.style.backgroundColor = "#7FFFD4";
eButton.style.borderRadius = "5px";
const eContent = document.querySelector('.e-content');
eContent.style.transition = "width 0.3s ease-in-out";
const pad = document.querySelector('#padded');
pad.style.display = "none";
eButton.style.position = "absolute";
eButton.style.top = "60px";
eButton.style.left = "25%";
let termOne = document.getElementsByClassName('term-one');
let operators = document.getElementsByClassName('operator');
let termTwo = document.getElementsByClassName('term-two');
let termThree = document.getElementsByClassName('term-three');
let input = document.getElementsByClassName('term-input');
const btn = document.getElementsByClassName('btn')[0];

//aButton
const aButton = document.querySelector('.a-button');
aButton.style.backgroundColor = "#7FFFD4";
aButton.style.borderRadius = "5px";
const aContent = document.querySelector('.a-content');
aContent.style.transition = "width 0.3s ease-in-out";
const apad = document.querySelector('#a-padded');
apad.style.display = "none";
aButton.style.position = "absolute";
aButton.style.top = "300px";
aButton.style.left = "25%";
let tOne = document.getElementsByClassName('t-one');
let o = document.getElementsByClassName('op');
let tTwo = document.getElementsByClassName('vari');
let tThree = document.getElementsByClassName('t-three');
let i = document.getElementsByClassName('t-input');
let t1, t3;
const abtn = document.getElementsByClassName('abtn')[0];

//-----------------------------
eButton.onclick = () => {
    if (isExpanded) {
        eContent.style.width = "5px";

        eContent.addEventListener('transitionend', () => {
            if (!isExpanded) {
                pad.style.display = "none";
            }
        }, { once: true });
    } else {
        pad.style.display = "block";
        setTimeout(() => {
            eContent.style.width = "50%";
        }, 0);
        if (isExpanded2 === true) {
            aButton.onclick();
        }
    }
    isExpanded = !isExpanded;
};

aButton.onclick = () => {
    if (isExpanded2) {
        aContent.style.width = "5px";

        aContent.addEventListener('transitionend', () => {
            if (!isExpanded2) {
                apad.style.display = "none";
            }
        }, { once: true });
    } else {
        apad.style.display = "block";
        setTimeout(() => {
            aContent.style.width = "38%";
        }, 0);
        if (isExpanded === true) {
            eButton.onclick();
        }
    }
    isExpanded2 = !isExpanded2;
};

//--------------------------------------------------------------
btn.addEventListener('click', function () {
    newEquation();
    filter();
    check();
});

abtn.addEventListener('click', function () {
    newAlg();
    aFilter();
    aCheck();
});

//--------------------------------------------------------------
function newEquation() {
    input[0].value = '';
    termThree[0].style.backgroundColor = '';
    const randomOp = Math.floor(Math.random() * 4);

    if (randomOp === 0) {
        operators[0].textContent = "+";
    } else if (randomOp === 1) {
        operators[0].textContent = "-";
    } else if (randomOp === 2) {
        operators[0].textContent = "*";
    } else if (randomOp === 3) {
        operators[0].textContent = "/";
    }
    const randomTerm1 = Math.floor(Math.random() * 11);
    termOne[0].textContent = randomTerm1.toString();

    const randomTerm2 = Math.floor(Math.random() * 11);
    termTwo[0].textContent = randomTerm2.toString();

    let t1 = randomTerm1;
    let t2 = randomTerm2;

    if (randomOp === 0) {
        a = t1 + t2;
    } else if (randomOp === 1) {
        a = t1 - t2;
    } else if (randomOp === 2) {
        a = t1 * t2;
    } else if (randomOp === 3) {
        a = t1 / t2;
    }

    termThree[0].style.visibility = 'hidden';
    termThree[0].textContent = a.toString();
    //console.log("newEquation: Term three is " + a);
    return a;
}

function newAlg() {
    i[0].value = '';
    tTwo[0].style.backgroundColor = '';
    const randomOp = Math.floor(Math.random() * 4);

    if (randomOp === 0) {
        o[0].textContent = "+";
    } else if (randomOp === 1) {
        o[0].textContent = "-";
    } else if (randomOp === 2) {
        o[0].textContent = "*";
    } else if (randomOp === 3) {
        o[0].textContent = "/";
    }
    const randomTerm1 = Math.floor(Math.random() * 11);
    tOne[0].textContent = randomTerm1.toString();

    const randomTerm2 = Math.floor(Math.random() * 11);
    tTwo[0].textContent = randomTerm2.toString();

    t1 = randomTerm1;
    t2 = randomTerm2;

    if (randomOp === 0) {
        t3 = t1 + t2;
    } else if (randomOp === 1) {
        t3 = t1 - t2;
    } else if (randomOp === 2) {
        t3 = t1 * t2;
    } else if (randomOp === 3) {
        t3 = t1 / t2;
    }

    tTwo[0].style.visibility = 'hidden';
    tThree[0].textContent = t3.toString();
    //console.log("newAlg: Term one is " + t1 + " term two is " + t2);
    return t2;
}

//Filtration functions
function filter() {
    if (a === Infinity || (typeof a === 'number' && !Number.isInteger(a))) {
        //console.log("newEquation: filtered");
        newEquation();
    }

    if (a.toString().includes("Infinity")) {
        //console.log("newEquation: filtered");
        newEquation();
    }
}

function check() {
    if (a.toString().includes(".")) {
        //console.log("newEquation: filtered");
        newEquation();
    }
}

function aFilter() {
    if (t3 === Infinity || (typeof t3 === 'number' && !Number.isInteger(t3)) || t1 === 0) {
        //console.log("newAlg: filtered");
        newAlg();
    }
    if (t3.toString().includes("Infinity")) {
        //console.log("newAlg: filtered");
        newAlg();
    }
}

function aCheck() {
    if (t3.toString().includes(".")) {
        //console.log("newAlg: filtered");
        newAlg();
    }
}

//---------------------
function inputF() {
    if (!isExpanded2) {
        if (parseFloat(input[0].value) === a) {
            termThree[0].style.visibility = 'visible';
            termThree[0].style.backgroundColor = 'rgb(1, 162, 1)';
            dingSound.play();
            input[0].value = blank;
        } else {
            termThree[0].style.visibility = 'visible';
            termThree[0].style.backgroundColor = 'red';
            noSound.play();
            input[0].value = blank;
        }
    }

    if (!isExpanded) {
        if (parseFloat(i[0].value) === t2) {
            tTwo[0].style.visibility = 'visible';
            tTwo[0].style.backgroundColor = 'rgb(1, 162, 1)';
            dingSound.play();
            i[0].value = blank;
        } else {
            tTwo[0].style.visibility = 'visible';
            tTwo[0].style.backgroundColor = 'red';
            noSound.play();
            i[0].value = blank;
        }
    }
    //console.log("isExpanded: " + isExpanded);
    //console.log("isExpanded2: " + isExpanded2);
}