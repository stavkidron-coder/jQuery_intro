console.log('Hello World');

$(document).ready(onReady);

let favFoods = ["Pizza", "Sushi", "Burritos", "Tacos"];

function onReady(){
    console.log('hello from jQ');
    //event listener
    $('#clickMe').on('click', buttonClicked);

    //descendant selector
    $('#favoriteFoods').on('click', '.deleteBtn', deleteFunc);

    $('#favoriteFoods').on('click', '.changeColor', changeColor);
}

function deleteFunc(){
    console.log('Delete');
    $(this).parent().remove();
}

function changeColor(){
    console.log('Color Changed');
    $(this).parent().addClass('pinkColor');
}

function buttonClicked(){
    console.log('I\'m Clicked');
    let ulFoods = $("#favoriteFoods");
    for (let i = 0; i < favFoods.length; i++) {
        ulFoods.append(`
            <li> One of my favorite foods is ${favFoods[i]} 
                <button class="deleteBtn">Delete</button>
                <button class="changeColor">Change Color</button>
            </li>
        `);   
    } 
}