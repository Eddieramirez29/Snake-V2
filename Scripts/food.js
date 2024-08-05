const food = document.getElementById('food');
//All positions saved into 2 arrays
// Arreglo X
let X = [283, 303, 323, 343, 363, 383, 403, 423, 443, 463, 483, 
    503, 523, 543, 563, 583, 603, 623, 643, 663, 683, 703, 723, 
    743, 763, 783, 803, 823, 843, 863, 883, 903, 923, 943, 963, 
    983, 1003, 1023, 1043, 1063];
// Arreglo Y
let Y = [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300,
     320, 340, 360, 380, 400, 420, 440, 460, 480];

//Minimum and maximum values for X and Y positions
//This is going to allow to select positions saved into the arrays above
let minX = 0, maxX = 39;
let minY = 0, maxY = 19;


//Returns a value between 0 and 39
function getRandomPositionX(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Returns a value between 0 and 19
function getRandomPositionY(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let positionArrayX = getRandomPositionX(minX, maxX);
let positionArrayY = getRandomPositionY(minY, maxY);

food.style.left = X[positionArrayX] + 'px';
food.style.top  = Y[positionArrayY] + 'px';

// Function to check if the snake has eaten the food
function eatFood()
{
    if (parseInt(snake.style.left) === parseInt(food.style.left) && parseInt(snake.style.top) === parseInt(food.style.top)) 
    {
        alert("eaten!");
        positionArrayX = getRandomPositionX(minX, maxX);
        positionArrayY = getRandomPositionY(minY, maxY);

        food.style.left = X[positionArrayX] + 'px';
        food.style.top = Y[positionArrayY] + 'px';
    }
}

document.addEventListener('keydown', function(event)
{
    
    //When clicking "Enter" key, the game will start
    if (event.key === 'Enter') 
    {
        positionArrayX = getRandomPositionX(minX, maxX);
        positionArrayY = getRandomPositionY(minY, maxY);

        food.style.left = X[positionArrayX] + 'px';
        food.style.top = Y[positionArrayY] + 'px';
    }
});
