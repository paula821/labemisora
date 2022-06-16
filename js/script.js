const emisoras = [
    {
       id:0,
       nombre: 'Selecciona una emisora',
       url: '',
       param: 'selected' 
    },
    {
        id:1,
        nombre: 'Radio tiempo',
        url: 'https://i70.letio.com/9144.aac',
        param: 'selected' 
     },
     {
        id:2,
        nombre: 'Olimpica',
        url: 'http://i50.letio.com/9122.aac',
        param: 'selected' 
     },
     {
        id:3,
        nombre: 'La mega',
        url: 'https://tupanel.info:2000/stream/2digitalradioHDsslLIVE020',
        param: 'selected' 
     },
     {
        id:4,
        nombre: 'La X',
        url: 'https://tupanel.info:2000/stream/2digitalradioHDsslLIVE020',
        param: 'selected' 
     },
]

const reproducir = document.getElementById('reproductor');
const signalIcon = document.getElementById('signal');
const selectEmisoras = document.getElementById('select-emisoras');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const ctrlVolumen = document.getElementById('volumen');

let playing;
let currentVolumen;

function init(){
    currentVolumen = 20;
    btnPlay.disable = true;
    btnPause.disable = true;
    ctrlVolumen.disable = true;
    playing = false;
    ctrlVolumen.value = currentVolumen;
    reproducir.volumen = currentVolumen/100;
    llenarSelectEmisoras();
    changeSignal();
}

function llenarSelectEmisoras(){
    let info = '';
    for(const element of emisoras){
        info += `<option ${element.param} value="${element.id}">${element.nombre}</option>`;
    }
    selectEmisoras.innerHTML = info;
}

function changeSelectEmisoras(evt){
    if(evt.value == 0){
        btnPlay.disable = true;
        btnPause.disable = true;
        ctrlVolumen.disable = true;
        playing = false;
    }else{
        btnPlay.disable = false;
        btnPause.disable = false;
        ctrlVolumen.disable = false;
        playing = true;
    }
    reproducir.src = emisoras[evt.value].url;
    changeSignal();
    reproducir.volumen = currentVolumen/100;
}

function play(){
    playing = true;
    reproducir.play();
    reproducir.volumen = currentVolumen/100;
    changeSignal();
}

function pause(){
    playing = false;
    reproducir.pause();
    changeSignal();
}

function changeVolumen(){
    currentVolumen = evt.value;
    reproducir.volumen = currentVolumen/100;
    changeSignal();
}

function changeSignal(){
    const color = playing ? 'green' : 'red';
    signalIcon.style.color = color;
}

(function(){
    init();
})();

