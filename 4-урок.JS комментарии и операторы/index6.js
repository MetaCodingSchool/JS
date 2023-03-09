// +
// -
// /
// *
// %
// **

// logical operator
// >
// <
// == 
// !
// && - и
// || - или
function replaceText(){
    let element = document.getElementById('demo');
    // const elementToShow= '<h1>Пример загаловка</h1>';
    const elementToShow= '<h2>Пример загаловка</h2>';

    element.innerHTML=elementToShow;
};

function replaceText(){
    let element = document.getElementById('demo');
    const elementToShow= 25;
    const elementToShow2= 30;
    /**
     * здесь выводим наш элемент и результат сложения двух переменных
     */
    element.innerHTML=elementToShow + elementToShow2;
};


function replaceText(){
    // alert(3 + 4);
    // alert(3 - 4);
    // alert(3 / 4);
    // alert(3 * 4);
    // alert(4 % 3);
    // alert(2 ** 3); 
    // alert(2 > 3);
    // alert(2 < 3);
    // alert(2 == 3);
    // alert(3 !== 2); 
    // alert(true && false);
    // alert(true || false);
    alert(2!==1 && 2>3);
};
