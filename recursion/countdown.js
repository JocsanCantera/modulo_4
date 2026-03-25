// Funcion de countdown

function countdown(n){
    // Caso base: cuando n llega a 0, termnina
    if(n === 0){
        console.log('Fin');
        return;
    }

    // Accion actual
    console.log(n);

    // Llamada recursiva (Reduciendo el problema)
    countdown(n-1);
    console.log('Entrando de n = ', n);
}
countdown(5);