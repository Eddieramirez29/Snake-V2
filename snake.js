const snake = document.getElementById('snake');
//Initial position for the "snake" superior izquierda
let posX = 283;
let posY = 100;

//Initial speed by time
let speed = 100;
//Initial speed by space
let speed2 = 5;


snake.style.left = posX + 'px';
snake.style.top = posY + 'px';


//Initial direction
let direction = 'right';

let intervalId = 0
//This funcion simulates movement of the sanek
function movement()
{
    switch(direction) 
    {
        case 'right':
            posX += speed2;
            break;
        case 'left':
            posX -= speed2;
            break;
        case 'up':
            posY -= speed2;
            break;
        case 'down':
            posY += speed2;
            break;
    }

    snake.style.left = posX + 'px';
    snake.style.top = posY + 'px';

    checkCollision();
    eatFood();
}


// Function to check for collisions
function checkCollision()
{
    if(posX > 970 || posX < 380 || posY > 420 || posY < 150) 
    {
        resetTimer(); //Call to reset Timer
        audioCollision.play();
        audio.pause();
        alert("You lost!!!");
        clearInterval(intervalId);
        intervalId = 0;
        restartPosition();
        direction = 'right'; // Reset direction to 'right' after collision
    }
}

//This funcion restarts to initial position
function restartPosition()
{
    posX = 283;
    posY = 100;

    snake.style.left = posX + 'px';
    snake.style.top = posY + 'px';
    direction = 'right'; // Reset direction to 'right' after collision
}

document.addEventListener('keydown', function(event)
{
    
    //When clicking "Enter" key, the game will start
    if (event.key === 'Enter')
    {
        //delay 5 ms
        // Prevent multiple intervals
        if (intervalId === 0) 
        {
            intervalId = setInterval(movement, speed);
        }

    }
    //Restart to initial position
    else if (event.key === 'r' || event.key === 'R') 
            {
                clearInterval(intervalId);//Stop snake
                resetTimer(); //Call to reset Timer
                intervalId = 0
                restartPosition();
                audio.pause();
            }
    else if (event.key === 'ArrowRight') 
            {
                direction = 'right';
            } 
    else if (event.key === 'ArrowLeft') 
            {
                direction = 'left';
            } 
    else if (event.key === 'ArrowUp') 
            {
                direction = 'up';
            } 
    else if (event.key === 'ArrowDown') 
            {
                direction = 'down';
            }
});

// Function to trigger the timer reset event
function resetTimer()
{
    clearInterval(timerInterval);
    timerElement.textContent = "00:00:00";
}
// Function to check if the snake has eaten the food
function eatFood() {
    if (parseInt(snake.style.left) === parseInt(food.style.left) && parseInt(snake.style.top) === parseInt(food.style.top)) {
        alert("eaten!");

        // Add code to increase the size of the snake or update the score
    }
}
