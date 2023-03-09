// Data Types
// Чичло
// BigInt
// Строка
// Логический тип 
// Null
// Underfind
// Симфол 
// Объект

// Пример 2
function replaceText(){
    let element = document.getElementById('demo')
    let name='Nurlybek Mussin';
    let age=23;
    let city='Almaty';
    let age2=1;

    const totalAge=age+age2;

    // element.innerHTML=name + " " + age + " " + city ;
    // element.innerHTML=name + " " + age + age2 + " " + city ;
    element.innerHTML=name + " " + totalAge + " " + city ;
};

// Пример 3
function replaceText(){
    let element = document.getElementById('demo')
    alert(element.innerHTML)
};

// Пример 4
function replaceText(){
    let cost=25;
    let cost2=30
    let element = document.getElementById('demo');
    // element.innerHTML= cost + cost2;
    element.innerHTML= cost + " " + cost2;
};

// Пример 5
function replaceText(){
    let element = document.getElementById('demo');
    const elementData=element.innerHTML
    // alert('Вы нажали на кнопку на которой есть текст' + elementData);
    alert(`Вы нажали на кнопку на которой есть текст ${elementData}`);
};

// Пример 6
function replaceText(){
    let age='0';
    age=prompt('Укажите ваш возвраст', age);
    alert(`Ваш возвраст равен ${age}`);
};

// Пример 7
function replaceText(){
    const age=23;
    age=prompt('Укажите ваш возвраст', age);
    alert(`Ваш возвраст равен ${age}`);
};

// Пример 8
function replaceText(){
    let element = document.getElementById('demo');
    const elementToShow= '<h1>Пример загаловка</h1>';
    element.innerHTML=elementToShow;
};
