let key =`b0guUnf4BeGhlql7UYesZsz739sYAFvYIyEIbXge`

let botonFecha = document.querySelector("#botonFecha")
let imagenFecha = document.querySelector("#imagenFecha")
let fecha1 = document.querySelector("#fecha1")
let fecha2 = document.querySelector("#fecha2")

botonFecha.onclick = function() {
    console.log(fecha)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${fecha.value}`)
fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${fecha1.value}&end_date=${fecha2.value}`)
    .then(res => res.json())
    .then(fotoFecha => {
        imagenFecha.src = fotoFecha.hdurl
        titulo.textContent = fotoFecha.title
    })
}