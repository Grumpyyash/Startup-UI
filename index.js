function tododark() {
  document.body.classList.toggle("dark-mode");
  var cc = document.querySelector('.container-fluid');
  cc.classList.toggle("container-color");
};

function random_bg_color() {
  var rr = Math.round(Math.random() * 255);
  var gg = Math.round(Math.random() * 255);
  var bb = Math.round(Math.random() * 255);
  var bgColor = "rgb(" + rr + "," + gg + "," + bb + ")";
  console.log(bgColor);
  document.body.style.background = bgColor;
}
