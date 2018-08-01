const chiArray = new ChiSquare('.array-wrapper');
const validator = new Validation();
$('.generate-array').click((e) => {
  let width = $('.array-width').val();
  let height = $('.array-height').val();

  if (!width || !height) {
    showModal('Fill width or height!');
    return false
  }

  chiArray.setWidth(width);
  chiArray.setHeight(height);

  chiArray.draw();

  setTimeout(() => {
    validator.nonNegative()
  },500);

  goToByScroll('.array-wrapper');
});

$('.calcuate-button').click(() => {
  chiArray.calacute();
  chiArray.sendData();
  goToByScroll('.chi-result');
});