// Crear el elemento tailSnake
const tailSnake = document.createElement('div');

const widthSnake = '20px';
const heightSnake = '20px';
const snakeColor = '#095594';
const borderRadiusItems = '20%';


// Function for creating tail
function createTail()
{

    // Asignar las propiedades CSS
tailSnake.style.width = widthSnake;
tailSnake.style.height = heightSnake;
tailSnake.style.backgroundColor = snakeColor;
tailSnake.style.borderRadius = borderRadiusItems;
tailSnake.style.position = 'absolute';
   

    // Añadir el elemento al DOM
    document.body.appendChild(tailSnake);
}




