var view = false;
function overlay(id){
    var over = document.getElementById("over");
    over.style.backgroundColor ="rgba(0,0,0,0.3)";
    id.style.visibility = "visible";
}
window.addEventListener("keydown", function(){
    this.document.getElementById("over").style.backgroundColor = "rgba(0,0,0,0)";
    this.document.getElementById("i1").style.visibility = "hidden";
    this.document.getElementById("i2").style.visibility = "hidden";
    this.document.getElementById("i3").style.visibility = "hidden";
    this.document.getElementById("i4").style.visibility = "hidden";
  });