function tododark(){
  document.body.classList.toggle("dark-mode");
  var cc=document.querySelector('.container-fluid');
  cc.classList.toggle("container-color");
};

function random_bg_color(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  document.body.style.background=bgColor;
}
