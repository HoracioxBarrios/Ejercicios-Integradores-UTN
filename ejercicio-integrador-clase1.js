/*Enunciado:
Ejercicio Integrador Clase 1.
Se debe ingresar por prompt: razón social de la empresa y nombre del titular.
El dni del titular y la fecha de inicio de actividades se ingresarán por id.

Mostrar por alert todos los datos y el cuit de la empresa, sabiendo que el mismo
está conformado por un código según el tipo de persona (30 en el caso de empresas),
un guión, el dni del titular, otro guión y un dígito verificador (será un número
aleatorio entre 0 y 9). */
function mostrar() {
    let razonSocial;
    let nombreTitular;
    let dniTitular;
    let fechaInicio;

    let codigoEmpresa = "30";
    let digitoVerificador;
    let cuitEmpresa;

    

    //toma de datos por prompt
    razonSocial = prompt("Ingrese Razon social");
    nombreTitular = prompt("ingrese nombre del titular");

    // toma de datos por ID
    dniTitular = document.getElementById("dniTitular").value;
    fechaInicio = document.getElementById("fechaInicio").value;

    //digito verificador aleatorio
    digitoVerificador = Math.floor(Math.random()*10 );
    

    //armamos el cuit de la empresa con los datos
    cuitEmpresa = codigoEmpresa + "-" + dniTitular + "-" + digitoVerificador;
   


    //mostramos los 4 datos obtenidos por el usuario, mas el cuit generado
    //utilizo \n para dar saltos de linea
    alert(" Razon Social: "+ razonSocial + "\n"
    + " Nombre del Titular: " + nombreTitular + "\n"
    + " Dni del titular: " + dniTitular + "\n"
    + " Fecha de Inicio: " + fechaInicio + "\n"
    + " Cuit de la Empresa: " + cuitEmpresa );


}
