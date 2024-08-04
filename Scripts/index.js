const tablero = document.getElementById('tablero');

function createBoard()
{
    //Generar las 800 casillas del tablero
for (let i = 0; i < 800; i++) {
    const casilla = document.createElement('div');
    casilla.classList.add('casilla');

    if ( (i % 2 === 0 && i < 40) || (i % 2 === 1 && i < 40) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('par');
            } 
            else
            {
                casilla.classList.add('impar');
            }
        }
        
        else if ( (i % 2 === 0 && i < 80) || (i % 2 === 1 && i < 80) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('impar');
            } 
            else
            {
                casilla.classList.add('par');
            }
        }
        
        else if ( (i % 2 === 0 && i < 120) || (i % 2 === 1 && i < 120) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('par');
            } 
            else
            {
                casilla.classList.add('impar');
            }
        }
        
        else if ( (i % 2 === 0 && i < 160) || (i % 2 === 1 && i < 160) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('impar');
            } 
            else
            {
                casilla.classList.add('par');
            }
        }
        
        else if ( (i % 2 === 0 && i < 200) || (i % 2 === 1 && i < 200) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('par');
            } 
            else
            {
                casilla.classList.add('impar');
            }
        }
        
        else if ( (i % 2 === 0 && i < 240) || (i % 2 === 1 && i < 240) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('impar');
            } 
            else
            {
                casilla.classList.add('par');
            }
        }
        
        else if ( (i % 2 === 0 && i < 280) || (i % 2 === 1 && i < 280) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('par');
            } 
            else
            {
                casilla.classList.add('impar');
            }
        }
        
        else if ( (i % 2 === 0 && i < 320) || (i % 2 === 1 && i < 320) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('impar');
            } 
            else
            {
                casilla.classList.add('par');
            }
        }
        
        else if ( (i % 2 === 0 && i < 360) || (i % 2 === 1 && i < 360) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('par');
            } 
            else
            {
                casilla.classList.add('impar');
            }
        }
        
        else if ( (i % 2 === 0 && i < 400) || (i % 2 === 1 && i < 400) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('impar');
            } 
            else
            {
                casilla.classList.add('par');
            }
        }
        
        else if ( (i % 2 === 0 && i < 440) || (i % 2 === 1 && i < 440) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('par');
            } 
            else
            {
                casilla.classList.add('impar');
            }
        }
        
        else if ( (i % 2 === 0 && i < 480) || (i % 2 === 1 && i < 480) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('impar');
            } 
            else
            {
                casilla.classList.add('par');
            }
        }
        
        else if ( (i % 2 === 0 && i < 520) || (i % 2 === 1 && i < 520) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('par');
            } 
            else
            {
                casilla.classList.add('impar');
            }
        }
        
        else if ( (i % 2 === 0 && i < 560) || (i % 2 === 1 && i < 560) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('impar');
            } 
            else
            {
                casilla.classList.add('par');
            }
        }
        
        else if ( (i % 2 === 0 && i < 600) || (i % 2 === 1 && i < 600) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('par');
            } 
            else
            {
                casilla.classList.add('impar');
            }
        }
        
        else if ( (i % 2 === 0 && i < 640) || (i % 2 === 1 && i < 640) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('impar');
            } 
            else
            {
                casilla.classList.add('par');
            }
        }
        
        else if ( (i % 2 === 0 && i < 680) || (i % 2 === 1 && i < 680) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('par');
            } 
            else
            {
                casilla.classList.add('impar');
            }
        }
        
        else if ( (i % 2 === 0 && i < 720) || (i % 2 === 1 && i < 720) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('impar');
            } 
            else
            {
                casilla.classList.add('par');
            }
        }
        
        else if ( (i % 2 === 0 && i < 760) || (i % 2 === 1 && i < 760) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('par');
            } 
            else
            {
                casilla.classList.add('impar');
            }
        }
        
        else if ( (i % 2 === 0 && i < 800) || (i % 2 === 1 && i < 800) ) 
        {
            if (i % 2 === 0)
            {
                casilla.classList.add('impar');
            } 
            else
            {
                casilla.classList.add('par');
            }
        }
        
        
    else 
    {
        if (i % 2 === 0)
        {
            casilla.classList.add('par');
        } 
        else
        {
            casilla.classList.add('impar');
        }
    }
    
    

    tablero.appendChild(casilla);
}

}

createBoard();
