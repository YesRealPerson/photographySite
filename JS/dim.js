var overlay = document.getElementById("overlay");
var dim = 100;
async function start(){
    while(dim > 0){
        overlay.style.backgroundColor = "rgba(0,0,0,"+dim/100+")";
        dim = dim-1;
        await new Promise(r => setTimeout(r, 10 ));
    }
    overlay.style.zIndex = -1;
    console.log(document.body);
}
start();