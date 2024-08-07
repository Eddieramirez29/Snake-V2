

const widthSnake = '20px';
const heightSnake = '20px';
const snakeColor = '#2c311d';
const borderRadiusItems = '20%';

let tails = [];//It saves tail 

// Function for creating tail
function createTail() 
{
    // Crear el elemento tailSnake
const tailSnake = document.createElement('div');
    // Asignar las propiedades CSS
tailSnake.style.width = widthSnake;
tailSnake.style.height = heightSnake;
tailSnake.style.backgroundColor = snakeColor;
tailSnake.style.borderRadius = borderRadiusItems;
tailSnake.style.position = 'absolute';
    // Establecer la posición del tailSnake
    tailSnake.style.left = (posX - 20) + 'px';
    tailSnake.style.top = posY + 'px';

    // Añadir el elemento al DOM
    document.body.appendChild(tailSnake);
}




