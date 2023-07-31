
let ButtonAqua = document.querySelector("#aqua");
let ButtonTeal = document.querySelector("#teal");
let ButtonPink = document.querySelector("#pink");
let ButtonPurple = document.querySelector("#purple");
let ButtonColorless = document.querySelector("#colorless");
let divRef = document.querySelector("#color-display");
let ButtonHidden = document.querySelector("#opacity");
let truvar = true


ButtonAqua.onclick = function(){


divRef.innerHTML = "Aqua";
divRef.style["background-color"] = "aqua";

}

ButtonTeal.onclick = function(){


    divRef.innerHTML = "Teal";
    divRef.style["background-color"] = "teal";
    
    }

ButtonPink.onclick = function(){


    divRef.innerHTML = "Pink";
    divRef.style["background-color"] = "pink";
        
    }

ButtonPurple.onclick = function(){


    divRef.innerHTML = "Purple";
    divRef.style["background-color"] = "purple";
            
    }

ButtonColorless.onclick = function(){


    divRef.innerHTML = "Colorless";
    divRef.style["background-color"] = "white";

    }


ButtonHidden.onclick = function(){

 if (truvar == true){
        truvar = false
        ButtonHidden.innerHTML = "Show";
        divRef.innerHTML = " ";
        divRef.style["background-color"] = "white";
        divRef.style["border"] = "white";
    }
    else{
        truvar = true
        ButtonHidden.innerHTML = "Hide";
        divRef.style["background-color"] = "aqua";
        divRef.innerHTML = "Aqua";
        divRef.style["border"] = "black";
    }

}








/*
ButtonHidden.onclick = function(){
    ButtonHidden.innerHTML = "Show";

   if(divRef.innerHTML == " " && divRef.style["border"] == "white"){
    divRef.innerHTML = "Colorless";
    divRef.style["background-color"] = "white";
    divRef.style["border"] = "black";

    ButtonHidden.innerHTML = "Hide";
    }
        
    divRef.innerHTML = " ";
        divRef.style["background-color"] = "white";
        divRef.style["border"] = "white";
        ButtonHidden.innerHTML = "Show";
        
    }
*/
