const snake = document.getElementById('snake');
//Initial position for the "snake" upper lefy side
let posX = 283;
let posY = 100;

//Initial speed by time
let speed = 400;
//Initial speed by space
let speed2 = 20;

let tailPosX = 0;
let tailPosY = 0;

snake.style.left = posX + 'px';
snake.style.top = posY + 'px';


//Initial direction
let direction = 'right';

let intervalId = 0
//This funcion simulates movement of the sanek
function movement()
{
    setDirectionAndPositionHead();
    checkWallsCollision();
    checkSelfCollision();
    eatFood();
    showTail();
    increaseSpeed();
}

function setDirectionAndPositionHead()
{
    switch (direction) 
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

    // Update head position
    snake.style.left = posX + 'px';
    snake.style.top = posY + 'px';
}

function showTail()
{
    // Save head position
    let prevX = posX;
    let prevY = posY;
    // Update current tail position
    for (let i = tail.length - 1; i > 0; i--) 
        {
            tail[i].style.left = tail[i - 1].style.left;
            tail[i].style.top  = tail[i - 1].style.top;
        }
    
        if (tail.length > 0)
        {
            tail[0].style.left = prevX + 'px';
            tail[0].style.top = prevY + 'px';
        }
}

function increaseSpeed()
{
    // Stopping the current interval and creating a 
    // new one with the updated speed ensures that 
    //there are no multiple intervals active at the same time.
    if(points%5 === 0 && points >= 5)
        {
            speed = speed - 100;
            points++;
            score.innerHTML = newParagraph.innerHTML + points;
            clearInterval(intervalId);
            intervalId = 0;
            intervalId = setInterval(movement, speed)
        }
}

function resetValuesWhenCollisioning()
{
    speed = 400;
    clearInterval(intervalId); // Detener el movimiento de la serpiente
    audioCollision.play();
    clearInterval(intervalId);//Stop snake
    resetTimer(); //Call to reset Timer
    intervalId = 0;
    restartPosition();
    direction = 'right'; // Restablecer la dirección a 'right' después de la colisión
    resetScore(); // Llamada para reiniciar el puntaje
    backgroundAudio.pause();
    // Eliminar todos los segmentos de la cola
    tail.forEach(segment => segment.remove());
    tail = []; // Vaciar el arreglo de la cola
    clearInterval(intervalId);//Stop snake
    alert('¡Game Over!');
}

function checkSelfCollision()
{
    for (let i = 0; i < tail.length; i++)
    {
        if (posX === parseInt(tail[i].style.left) && posY === parseInt(tail[i].style.top))
        {
            resetValuesWhenCollisioning();
            break;
        }
    }
}

// Function to check for collisions
function checkWallsCollision()
{
    if (posX > 1065 || posX < 283 || posY > 480 || posY < 100)
    {
        resetValuesWhenCollisioning();
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
        // Prevent multiple intervals
        if (intervalId === 0)
        {
            intervalId = setInterval(movement, speed);
            resetScore(); //Call to reset Score
            startTimer();
            initialRandomPositionWhenStarting();
        }
    }
    else
        if (event.key === 'ArrowRight') 
        {
            direction = 'right';
        }
    else
        if (event.key === 'ArrowLeft') 
        {
            direction = 'left';
        }
    else
        if (event.key === 'ArrowUp') 
        {
            direction = 'up';
        }
    else
        if (event.key === 'ArrowDown') 
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