// function changeStyle(){
//     var element = document.getElementById('mydiv')
//     for(let i=100;i<=500;i+=1){
//         element.style.width=`${i}px`;
//         element.style.transition='5000ms';
//     }
    
// };

// function returnBackStyle(){
//     var element2 = document.getElementById('mydiv')
//     element2.style.width='100px';
// };



//____________________________________________________

// function hello(){
//     alert('Привет, Это Meta')
// }
// hello()
// hello()
// hello()


//____________________________________________________

// let year=1993;
// function kz(){
//     let message='Казахстан был основан в ' + year + ' году'; 
//     alert(message)
// }

//____________________________________________________

// function age(year=1991){
//     const ageToShow=2022-year
//     alert('Вам ' + ageToShow + ' лет.');
// }

// age(1998);

// age();

// function getAge(){
//     let requestedAge=prompt('Укажите год раждения')
//     if(requestedAge==''){
//         age();
//     }else{
//         age(requestedAge);
//     }
    
// }


//____________________________________________________

// function age(year=1991){
//     alert('Вам ' + 2022-year + ' лет.');
// }

// age();


//____________________________________________________

// function chackAge(age){
//     if(age>=18){
//         return true;
//     }else{
//         return confirm('А радители разрешили?')
//     }
// }

// let age=prompt('сколько вам лет?');

// if(chackAge(age)){
//     alert('Доступ получен');
// }else{
//     alert('Доступ закрыт')
// }

// function returnExample(){
//     alert('Show return text')
//     return 'newReturnValue'
// }

// let returnedValue=returnExample()

// console.log('returnedValue = ', returnedValue)

//____________________________________________________

function askForWidth(){
    let width=prompt('Укажите ширину')
    changStyle(width)
}

function changStyle(width){
    var element=document.getElementById('mydiv');
    for(let i=100;i<=width;i+=1){
        element.style.width=`${i}px`;
        element.style.transition='5000ms';
    }
}
function returnBackStyle(){
    var element2 = document.getElementById('mydiv')
    element2.style.width='100px';
};

