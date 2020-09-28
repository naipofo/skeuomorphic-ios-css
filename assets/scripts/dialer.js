var b = "";
function num(a) {
  b += a;
  acc();
}
function star() {
  b += "*";
  acc();
}
function hash() {
  b += "#";
  acc();
}
function del() {
  if (b.length != 0){
    b = b.slice(0, -1);
    acc();
  } else{
    b = "";
    acc();
  }
}
// update box
function acc() {
  document.querySelector(".numInput").innerHTML = b;
}
// call number
function call() {
  callLink.href="tel:"+b
  callLink.click();
}
// live clock
function clockUp() {
  var time = new Date();
  clock.innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}
setInterval(clockUp, 1000);
clockUp();