$(document).ready(function () {
  var sequence = new CanvasSequence(
    'canvas',
    'https://github.com/MaartenGoumansHSH/ctms/blob/master/img/sequence_00',
    98,
    180,
    '.jpg',
    function () {
      console.log('Loaded !');
    }
  );
});
