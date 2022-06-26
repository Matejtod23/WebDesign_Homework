
function showText(imgId, textId){
    var img = document.getElementById(imgId);
    var text = document.getElementById(textId);
    if(img && text){
    if(img.style.opacity == '1'){
        img.setAttribute("style", "opacity: 0%; transition: all 450ms;")
        text.setAttribute("style", "opacity: 100%; transition: all 450ms;")
    }
    else{
        img.setAttribute("style", "opacity: 100%; transition: all 450ms;")
        text.setAttribute("style", "opacity: 0%; transition: all 450ms;")
    }
}
}