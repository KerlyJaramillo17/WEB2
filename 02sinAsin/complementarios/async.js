/* Estos 3 arreglos deben tener relación con el proceso principal de su proyecto. Por ejemplo, si fuese consultar 
los cursos que hay online: Materias, horario de clase y total de estudiantes
que van a recibir la siguiente materia. */

const Materias = [
    {
        id: 1,
        Materia: "Divulgación científica",
        idhorario: 2,
        idestud: 3
    },
    {
        id: 2,
        Materia: "Estadística Avanzada",
        idhorario: 3,
        idestud: 2
    },
    {
        id: 3,
        Materia: "Optativa de Divulgación",
        idhorario: 1,
        idestud: 1
    },
    {
        id: 4,
        Materia: "Modelos y Teorías en Salud",
        idhorario: 1,
        idestud: 1
    }
]

const horarios = [
    {
        id: 1,
        hora: "8:00-10:00"
    },
    {
        id: 2,
        hora: "10:00-12:00"
    },
    {
        id: 3,
        hora: "3:00-5:00"
    },
    {
        id: 4,
        hora: "5:00-7:00"
    }
]

const total_e = [
    {
        id: 1,
        curso: "A",
        total: 30
    },
    {
        id: 2,
        curso: "B",
        total: 30
    },
    {
        id:3,
        curso: "C",
        total: 15
    }
]


//consultar el curso por id 

async function consultarcurso(id) {
        const materia = Materias.find((materia) => materia.id === id);
        if (!materia) {
            const error = new Error();
            error.message = "La Materia no se a encontrado ";
            throw error;
        }
        return materia;
}

//Funcion para consultar el horario por id del curso

async function consultarC(id) {
        const horario = horarios.find((horario) => horario.id === id);
        if (!horario) {
            const error = new Error();
            error.message = "El Horario no se a encontrado ";
            throw error;
        }
        return horario;
}

//Funcion para consultar el total de estudiantes por id del curso

async function consultarH(id) {
        const tota_estudiante = total_e.find((tota_estudiante) => tota_estudiante.id === id);
        if (!tota_estudiante) {
            const error = new Error();
            error.message = "Total estudiantes no encontrado ";
            throw error;
        }
        return tota_estudiante;
}

async function main (){
    try{
        const materia = await consultarcurso(1);
        const horario = await consultarC(materia.idhorario);
        const tota_estudiante = await consultarH(materia.idestud);
        console.log(`El curso es ${materia.Materia}, su horario es: ${horario.hora} y su total de estudiantes es ${tota_estudiante.total}`);
    }catch(error){
        console.log(error.message);
    }
}

main();
