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