// While
function showNumbers(){
    let i=0;
    while(i<=5){
        alert(i);
        i+=1;
    }
}

// Do while

function showNumbers(){
    let i=-2;
    do{
        alert(i);
        i=i+2;
    }while(i <= 8 && i>=0){
        alert(i);
    }
}

// for

function showNumbers(){
    for(let i=0;i<=5;i++){
        alert(i);
    }
}

function changeStyle(){
    var element = document.getElementById('mydiv')
    for(let i=100;i<=500;i+=1){
        element.style.width=`${i}px`;
        element.style.transition='5000ms';
    }
    
};

function returnBackStyle(){
    var element2 = document.getElementById('mydiv')
    element2.style.width='100px';
};