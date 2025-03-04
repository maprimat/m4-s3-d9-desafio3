// ARRAYS
document.write('<p>Estadisticas centro medico ñuñoa</p>');

var pacientesRadiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var pacientesTraumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var pacientesDental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

// REQUERIMIENTO 1
pacientesTraumatologia.push(
    {hora: '9:00',  especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA',     rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '9:30', especialista: 'MARIA SOLAR',          paciente: 'RAMIRO ANDRADE',    rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA',     paciente: 'CARMEN ISLA',         rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS',   paciente: 'PABLO LOAYZA',   rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA',    paciente: 'SUSANA POBLETE',    rut: '14345656-6', prevision: 'FONASA'},
);

// REQUERIMIENTO 2
pacientesRadiologia.shift();
pacientesRadiologia.pop();
console.log(pacientesRadiologia);

// REQUERIMIENTO 3
// METODO 1
/* pacientesDental.forEach((paciente) =>{
     document.write(`<p>${paciente.hora} - ${paciente.paciente} - ${paciente.rut} - ${paciente.prevision}</p>`);
}); */

// METODO 2 (Recoomendado)
const crearEtiquetaPacientes = (pacientes) => {
    let htmlCode = '';
    pacientes.forEach(paciente =>{
        htmlCode += `<p>${paciente.hora} - ${paciente.paciente} - ${paciente.rut} - ${paciente.prevision}</p>`;
    })
    return htmlCode;
}

const imprimirPacientes = (pacientes, contenedor) => {
    const etiquetasPacientes = crearEtiquetaPacientes(pacientes);
    const contenedorPacientes = document.getElementById(contenedor);
    contenedorPacientes.innerHTML = etiquetasPacientes;
}

imprimirPacientes(pacientesDental, "lista-pacientes");

// REQUERIMIENTO 4
const totalPacientes = pacientesDental.concat(pacientesRadiologia, pacientesTraumatologia);

const crearEtiquetaPacientesTotal = (pacientes) =>{
    let htmlCode = '';
    pacientes.forEach(paciente =>{
        htmlCode += `<p>${paciente.paciente}</p>`;
    })
    return htmlCode;
}

const imprimirPacientesTotal = (pacientes, contenedor) => {
    const etiquetasPacientes = crearEtiquetaPacientesTotal(pacientes);
    const contenedorPacientes = document.getElementById(contenedor);
    contenedorPacientes.innerHTML = etiquetasPacientes;
}

imprimirPacientesTotal(totalPacientes, "lista-total-pacientes");

// REQUERIMIENTO 5
const pacientesIsapreDental = pacientesDental.filter(paciente =>{
    if (paciente.prevision === 'ISAPRE'){
        return paciente;
    }
});

const crearEtiquetaPacientesPrevision = (pacientes) =>{
    let htmlCode = '';
    pacientes.forEach(paciente =>{
        htmlCode += `<p>${paciente.paciente} - ${paciente.prevision}</p>`;
    })
    return htmlCode;
}

const imprimirPacientesPrevision = (pacientes, contenedor) => {
    const etiquetasPacientes = crearEtiquetaPacientesPrevision(pacientes);
    const contenedorPacientes = document.getElementById(contenedor);
    contenedorPacientes.innerHTML = etiquetasPacientes;
}

imprimirPacientesPrevision(pacientesIsapreDental,"lista-pacientes-isapre-dental");

// REQUERIMIENTO 6
const pacientesFonasaTraumatologia = pacientesTraumatologia.filter(paciente =>{
    if (paciente.prevision === 'FONASA'){
        return paciente;
    }
});

imprimirPacientesPrevision(pacientesFonasaTraumatologia,"lista-pacientes-fonasa-traumatologia");
