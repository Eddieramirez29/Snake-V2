let score = document.getElementById("score");
let newParagraph = document.createElement('p');

let points = 0;

// Function to check if the snake has eaten the food
function eatFood() 
{
    if (parseInt(snake.style.left) === parseInt(food.style.left) && parseInt(snake.style.top) === parseInt(food.style.top)) 
    {
        newParagraph.innerHTML = "Score: ";
        points = points + 1;//It counts points
        score.innerHTML = newParagraph.innerHTML + points;
    }
}
