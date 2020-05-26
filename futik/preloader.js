window.onload = function(){
    setTimeout(closePreloader,500);
}

function closePreloader(){
    document.getElementById("preloader").remove();
}