//elegir foto entre dos fechas elegidas por el usuario
let key = 'PnfTdhzcF0kCOilpRqi7iUa4QMBmxUoGQ9uDPUPp';
let imagenFecha = document.querySelector('#imagenFecha')
let botonFecha = document.querySelector('#botonFecha')
let fechaUsuario = document.querySelector('#fecha')
botonFecha.onclick = function (){
  console.log (fechaUsuario)
  fetch('https://api.nasa.gov/planetary/apod?api_key=PnfTdhzcF0kCOilpRqi7iUa4QMBmxUoGQ9uDPUPp&date=2020-05-01')
  .then(res => res.json())
  .then(fotoFecha => {
imagenFecha.src = fotoFecha.hdurl
  })
}