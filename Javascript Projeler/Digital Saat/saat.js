function Digital_saat(){
    var sure= new Date;
    document.getElementById("saat").innerHTML=say(sure.getHours())+":"
    +say(sure.getMinutes())+":"
    +say(sure.getMinutes());
    setInterval(Digital_saat, 1000);
}

function say(x){
    if(x<10){
        x="0" +x;
    }
    return x;
}

Digital_saat();