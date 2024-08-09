const snake = document.getElementById('snake');
//Initial position for the "snake" upper lefy side
let posX = 283;
let posY = 100;

//Initial speed by time
let speed = 100;
//Initial speed by space
let speed2 = 5;

let tailPosX = 0;
let tailPosY = 0;

let a = 0;

snake.style.left = posX + 'px';
snake.style.top = posY + 'px';


//Initial direction
let direction = 'right';

let intervalId = 0
//This funcion simulates movement of the sanek
function movement() {
    // Guardar la posición actual de la cabeza de la serpiente
    let prevX = posX;
    let prevY = posY;

    switch (direction) {
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

    // Actualizar la posición de la cabeza de la serpiente
    snake.style.left = posX + 'px';
    snake.style.top = posY + 'px';

    // Actualizar la posición de la cola
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

    checkCollision();
    eatFood();
}



// Function to check for collisions
function checkCollision() {
    if (posX > 1065 || posX < 283 || posY > 480 || posY < 100) {
        a = 0;

        // Eliminar todos los segmentos de la cola
        tail.forEach(segment => segment.remove());
        tail = []; // Vaciar el arreglo de la cola

        audioCollision.play();
        clearInterval(intervalId);
        intervalId = 0;
        restartPosition();
        resetTimer(); // Llamada para reiniciar el temporizador
        direction = 'right'; // Restablecer la dirección a 'right' después de la colisión
        resetScore(); // Llamada para reiniciar el puntaje
        backgroundAudio.pause();
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
        resetScore(); //Call to reset Score

    }
    //Restart to initial position
    else if (event.key === 'r' || event.key === 'R') 
            {
                clearInterval(intervalId);//Stop snake
                resetTimer(); //Call to reset Timer
                intervalId = 0
                a = 0;
                restartPosition();
                backgroundAudio.pause();
                resetScore(); //Call to reset Score
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

