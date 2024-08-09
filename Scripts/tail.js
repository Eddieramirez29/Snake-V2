let tail = []; // Arreglo para almacenar los segmentos de la cola

function createTail() {
    // Crear un nuevo div para el segmento de la cola
    let tailSnake = document.createElement('div');

    // Propiedades CSS
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
    tailSnake.classList.add('snake');

    // Añadir el nuevo segmento a la cola
    document.body.appendChild(tailSnake);

    // Añadir el segmento a la lista de la cola
    tail.push(tailSnake);
}
