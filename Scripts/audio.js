// Crear un objeto Audio para cada sonido
const audio = new Audio('./Sounds/BackgroundSound.wav');
const audioCollision = new Audio("./Sounds/Collision.wav");
const eatFoodAuido = new Audio("../Sounds/EatFood.mp3")

// Función para reproducir el sonido
function playSound() 
{
  audio.play();
}

// Llamar a la función para reproducir el sonido cuando se necesite
document.addEventListener('keydown', function(event)
{
  if (event.key === 'Enter') 
  {
    playSound();
  }
});
