const horas = document.getElementById('h');
const minutos = document.getElementById('m');
const segundos = document.getElementById('s');

const relogio = setInterval(function time() {
   let dateToday = new Date();
   let hr = dateToday.getHours();
   let mim = dateToday.getMinutes();
   let seg = dateToday.getSeconds();
   /*
      if (hr < 10) hr = '0' + hr;
      if (mim < 10) mim = '0' + min;
      if (seg < 10) seg = '0' + seg;
      */
   horas.textContent = hr
   minutos.textContent = mim
   segundos.textContent = seg


})