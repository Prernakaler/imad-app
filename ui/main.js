//counter code
var button = document.getElementbyId("counter");
button.onclick =function(){
    // make a request to the counter enpoint
    
    //capture and store it in a variable
    
    //Render the variable in the correct span
    counter = counter+1;
    var span = document.getElementById('count')
    span.innerHTML = counter.toString();
};