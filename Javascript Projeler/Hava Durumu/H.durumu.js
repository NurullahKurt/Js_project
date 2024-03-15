const url='https://api.openweathermap.org/data/2.5/';
const key='718d1eb0cfcb2d036427d6feeaec14';

const setQuery=(e) =>{
    if(e.keyCode=='13')
        getResult(serchBar.value)
}

const getResult=(cityName)=>{
    let query='${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr'
    console.log(query);
    fetch{query}
    .then(we)
}

const serchBar= document.getElementById('serchBar');
serchBar.addEventListener('keypress',setQuery)