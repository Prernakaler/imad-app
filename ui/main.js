console.log('Loaded!');

//change the text of thr main text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//move the image
var img = document.getElementById('madi');
var marginLeft =0;
function moveRight(){
    marginLeft = marginLeft+10;
    img.style.marginLeft =marginLeft='px';
}
img.onClick = function(){
    var interval = setInterval(moveRoght,100);   //every 100ms apply the move right function
    
};