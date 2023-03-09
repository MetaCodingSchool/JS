function showPosition(position){
    let element=document.getElementById('demo');
    element.innerHTML = 'Широта: ' + position.coords.latitude + '<br>Долгота:' + position.coords.longitude;
}

function getLocation(){
    try{
        navigator.geolocation.getCurrentPosition(showPosition);
    }catch{
        x.innerHTML=err;
    }
}