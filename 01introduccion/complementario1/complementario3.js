/*Definir un arreglo con sus comidas favoritas.*/

const comidas = [
    {id: 1, momento: 'ceviche'},
    {id: 2, momento: 'Camaron apanado'},
    {id: 3, momento: 'Encebollado'},
    {id: 4, momento: 'Cazuela'},
    {id: 5, momento: 'Pollo hornado'},
];
 
const momentoComida = comidas.map(function(comida) {
    return comida.momento;
});
 
console.log(momentoComida);