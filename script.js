// Los videos a mostrar en el contenedor principal
const videos = [
  "Ig3gJ3EzDjU",
  "sMagucDUueY",
  "jHNwPf0Lc_8",
  "omA-Pn4sRwM"
];

// Obtiene la fecha de término (30 de agosto a las 00:00 horas)
const fechaTermino = new Date('2023-08-30T00:00:00');

function actualizarContador() {
  const ahora = new Date().getTime();
  const tiempoRestante = fechaTermino - ahora;

  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  document.getElementById('contador').innerHTML = `Faltan: ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;

  if (tiempoRestante < 0) {
      document.getElementById('contador').innerHTML = '¡Tiempo terminado!';
  }
}

// Cambiar el video principal al hacer clic en los botones
function cambiarVideo(videoId) {
  const mainVideo = document.getElementById('main-video');
  mainVideo.src = `https://www.youtube.com/embed/${videoId}`;
}

// Carga el primer video por defecto
cambiarVideo(videos[0]);

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);
