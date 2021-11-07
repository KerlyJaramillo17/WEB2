/*
5.Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en
mayúscula

function Cambiar(texto){
    if(typeof texto === 'string') {
        return texto.toUpperCase(); 
        }else{
            throw TypeError ('El argumento debe ser una cadena de caracteres')
        }
    }

    console.log(Cambiar('ceviche'));
    */ 

var comidas=['ceviche'];

comidas.forEach( (comids) => {
    
    console.log(comids)
});
    

