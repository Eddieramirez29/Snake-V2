const tailSnake = document.createElement('div');

const widthSnake = '20px';
const heightSnake = '20px';
const snakeColor = '#095594';
const borderRadiusItems = '20%';

 // Asignar las propiedades CSS
tailSnake.style.width = widthSnake;
tailSnake.style.height = heightSnake;
tailSnake.style.backgroundColor = snakeColor;
tailSnake.style.borderRadius = borderRadiusItems;
tailSnake.style.position = 'absolute';



// Function for creating tail
function createTail()
{
    // Añadir el elemento al DOM
    tailSnake.classList.add("snake");
    document.body.appendChild(tailSnake);
    // Guardar el nuevo segmento en el array
    a++;
}