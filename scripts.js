console.log('Hello World');

$(document).ready(onReady);

let favFoods = ["Pizza", "Sushi", "Burritos", "Tacos"];
let employees = [];
let count =0;

function onReady(){
    console.log('hello from jQ');
    //event listener
    $('#clickMe').on('click', buttonClicked);
    $('#submitForm').on('click', submitForm);
    $('#counter').on('click', countUp);
    $('#count').text(count);

    //descendant selector
    $('#favoriteFoods').on('click', '.deleteBtn', deleteFunc);
    $('#favoriteFoods').on('click', '.changeColor', changeColor);
    
}

function deleteFunc(){
    console.log('Delete');
    $(this).parent().remove();
}

function changeColor(){
    $(this).parent().toggleClass('pinkColor');
}

function countUp(){
    console.log('count up');
    count++;
    $('#count').text(count);
}

function submitForm(){
    // grab input values
    //getter .val()
    //setter .val('something');
    // .text() is another getter/setter
    
    let name = $('#name').val(); //creates a name variable that takes the value of name input
    console.log('Name:', name); //logs the inputed name
    
    let title = $('#title').val(); //creates a name variable that takes the value of name input
    console.log('Title:', title); //logs the inputed title
    //employees.push(title); // pushes name input into emplyees array

    let employeeObj = {
        name: name,
        title: title
    };

    employees.push(employeeObj);

    $('#title').val(''); // resets value as an empty string
    $('#name').val(''); // resets value as an empty string
}

function buttonClicked(){
    console.log('I\'m Clicked');
    let ulFoods = $("#favoriteFoods");
    //clear out ul to append a fresh list
    ulFoods.empty();

    for (let i = 0; i < favFoods.length; i++) {
        ulFoods.append(`
            <li> One of my favorite foods is ${favFoods[i]} 
                <button class="deleteBtn">Delete</button>
                <button class="changeColor">Change Color</button>
            </li>
        `);
    } 
}