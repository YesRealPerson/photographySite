var random = Math.floor(Math.random()*4+1);
document.body.style.backgroundImage = "url('pictures/"+random+".jpeg')";
if(random == 1){
    document.body.style.backgroundPosition = "center";
}