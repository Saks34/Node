var img=null;
function init(){
    img = document.getElementById('myimg');
    img.style.position='relative';
    img.style.left='50px';
}
function moveRight(){
    img.style.left=parseInt(
        img.style.left)+50+'px';
}
function moveLeft(){
    img.style.left=parseInt(
        img.style.left)-50+'px';
}
window.onload=init; 