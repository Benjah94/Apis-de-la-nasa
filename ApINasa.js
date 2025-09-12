let API = 'PnfTdhzcF0kCOilpRqi7iUa4QMBmxUoGQ9uDPUPp';
let imagen = document.getElementById('imagen');
let titulo = document.getElementById('titulo');
let fechaDiv = document.getElementById('fecha');
let dia = document.getElementById('dia');
let fechaBtn = document.getElementById('fechaBtn');
let aleatorioBtn = document.getElementById('aleatorioBtn');
let fecha = document.getElementById('fecha');
let aleatorio = document.getElementById('aleatorio');

dia.onclick = function() {
  fetch('https://api.nasa.gov/planetary/apod?api_key=' + API)
    .then(function(x){ return x.text(); })
    .then(function(txt){
      let f = JSON.parse(txt); 
      imagen.src = f.url;
      titulo.textContent = f.title;
      fechaDiv.textContent = f.date;
    });
};

fechaBtn.onclick = function() {
  let f = fecha.value;
  fetch('https://api.nasa.gov/planetary/apod?api_key=' + API + '&date=' + f)
    .then(function(x){ return x.text(); })
    .then(function(txt){
      let f = JSON.parse(txt);
      imagen.src = f.url;
      titulo.textContent = f.title;
      fechaDiv.textContent = f.date;
    });
};

aleatorioBtn.onclick = function() {
  let n = aleatorio.value;
  fetch('https://api.nasa.gov/planetary/apod?api_key=' + API + '&count=' + n)
    .then(function(x){ return x.text(); })
    .then(function(txt){
      let fs = JSON.parse(txt);
 
      imagen.src = fs[0].url;
      titulo.textContent = fs[0].title;
      fechaDiv.textContent = fs[0].date;
    });
};