console.log('Hello World');

$(document).ready(onReady);

function onReady(){
    console.log('hello from jQ');
    //event listener
    $('#clickMe').on('click', buttonClicked)
}

function buttonClicked(){
    console.log('I\'m Clicked');  
}