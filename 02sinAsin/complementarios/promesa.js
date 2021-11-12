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


//Funcion para consultar el curso por id 

function consultarc(id) {
    return new Promise((resolve, reject) => {
        const materia = Materias.find((materia) => materia.id === id);
        if (!materia) {
            const error = new Error();
            error.message = "Materia no encontrada ";
            reject(error);
        }
        resolve(materia);
    })
}

//Funcion para consultar el horario por id del curso

function consultarH(id) {
    return new Promise((resolve, reject) => {
        const horario = horarios.find((horario) => horario.id === id);
        if (!horario) {
            const error = new Error();
            error.message = "Horario no encontrado ";
            reject(error);
        }
        resolve(horario);
    })
}

//Funcion para consultar el total de estudiantes por id del curso

function consultarE(id) {
    return new Promise((resolve, reject) => {
        const estudiantes = total_e.find((estudiantes) => estudiantes.id === id);
        if (!estudiantes) {
            const error = new Error();
            error.message = "Total estudiantes no encontrado ";
            reject(error);
        }
        resolve(estudiantes);
    })
}
//Funcion para Consultar el total de los estudiantes por materia 

let materiaAuxiliar = [];
let materia2Auxiliar = [];

consultarc(1).then((materia) => {
    materiaAuxiliar = materia;
    return consultarE(materia.idestud);
})

    .then((estudiantes) => {
        materiaAuxiliar.estudiantes = estudiantes;
        delete materiaAuxiliar.idestud;
    })
    

consultarc(1).then((materia) => {
    materia2Auxiliar = materia;
    return consultarH(materia.idhorario);s
})
    .then((horario) => {
       materia2Auxiliar.horario = horario;
       delete materia2Auxiliar.idhorario;
       console.log(materia2Auxiliar)
    })

    .catch((err) => {
        console.log(err.message);
    })

    











