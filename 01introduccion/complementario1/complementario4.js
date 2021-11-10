/*Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while*/

const comidas = [
    {id: 1, momento: 'ceviche'},
    {id: 2, momento: 'Camaron apanado'},
    {id: 3, momento: 'Encebollado'},
    {id: 4, momento: 'Cazuela'},
    {id: 5, momento: 'Pollo hornado'},
]
const momentoComida = comidas.map(function(comida) {
    return comida.momento;
});

let iterador=0;
do
{
console.log(momentoComida[iterador]);
iterador++;
}
while (iterador< momentoComida.length)