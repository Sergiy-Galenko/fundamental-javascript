const e = require("express");

const btn = document.getElementById('toggle-btn'); // выбираем кнопку для оброботки события
const div = document.querySelector('.element'); // выбираем див котором лежит наш класс

function toggleDivVisibility(){
    // if( div.style.display === 'none'){
    //     div.style.display = 'block'
    // }else{ div.style.display = 'none' }

    div.classList.toggle('hide');
}