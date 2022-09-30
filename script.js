async function rotate(){
    var max = 4;
    var current = 1;
    await new Promise(r => setTimeout(r, 1500));
    while(true){
        document.getElementById(current).style.zIndex = 2;
        document.getElementById(current).className = "mouse";
        
        if(current == 1){
            document.getElementById("4").className = "fadeout";
        }else{
            document.getElementById(current-1).className = "fadeout";
        }
        document.getElementById(current).style.visibility = "visible";
        document.getElementById(current).className = "mouse fadein";

        await new Promise(r => setTimeout(r, 1500 ));

        if(current == 1){
            document.getElementById("4").className = "";
            document.getElementById("4").style.visibility = "hidden";
        }else{
            document.getElementById(current-1).style.visibility = "hidden";
        } 
        document.getElementById(current).className = "";

        await new Promise(r => setTimeout(r, 1500 ));
     
        document.getElementById(current).style.zIndex = 0;
     
        current += 1;
        if(current > max){
            current = 1;
        }
    }
}

document.getElementById("4").style.visibility = "visible";
rotate();