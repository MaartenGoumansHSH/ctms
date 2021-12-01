import Karavai from 'karavai';

const images = ['', ''];
const canvasRef = document.querySelector('#canvas');

const karavai = new Karavai(images, canvasRef);

(async () => {
  await karavai.preloadImages();
  karavai.start();
})();
