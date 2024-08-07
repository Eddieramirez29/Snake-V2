let score = document.getElementById("score");
let newParagraph = document.createElement('p');

let points = 0;

//Function for reseting score

function resetScore()
{
    score.innerHTML =  "Score: 0";
    points = 0;
}

// Function to check if the snake has eaten the food
function eatFood()
{
    if (parseInt(snake.style.left) === parseInt(food.style.left) && parseInt(snake.style.top) === parseInt(food.style.top)) 
    {
        newParagraph.innerHTML = "Score: ";
        eatFoodAudio.play();
        points = points + 1;//It counts points
        score.innerHTML = newParagraph.innerHTML + points;
        positionArrayX = getRandomPositionX(minX, maxX);
        positionArrayY = getRandomPositionY(minY, maxY);
        createTail();
        food.style.left = X[positionArrayX] + 'px';
        food.style.top = Y[positionArrayY] + 'px';
    }
}
