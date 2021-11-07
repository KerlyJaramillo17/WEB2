
function saludar(nombre)
{
    return `Hola como estas ${nombre}`;

}

const saludar2 = function(nombre)
{
    return `Hola como estas ${nombre}`;

}

const saludar3 = (nombre)=>{
    return `Hola como estas ${nombre}`;
}

function mostrarFuncionaParaSaludar(fn,parametro)
{
    console.log(fn(parametro));

}
mostrarFuncionaParaSaludar(saludar2, "john");