require('colors'); //1
const mostrarMenu = () => /*@Method*/ //2
{  //3
    return new Promise( resolve => //4
    { //5
        console.clear(); //6
        console.log('=========================='.green); //7
        console.log('  Seleccione una opción'.green); //8
        console.log('==========================\n'.green); //9
        console.log(`1. Cantidad de elementos de la lista`); //10
        console.log(`2. Agregar un elemento`); //11
        console.log(`3. Eliminar un elemento dada su posición en la lista`); //12
        console.log(`4. Devolver un nodo dada su posición en la lista`); //13
        console.log(`5. Calcular la media`); //14
        console.log(`6. Calcular la desviación estándar`); //15
        console.log(`7. Listar los valores de los nodos`); //16
        console.log(`0. Salir \n`); //17
        const readline = require('readline').createInterface( //18
        { //19
            input: process.stdin, /*Declaracion*/ //20
            output: process.stdout /*Declaracion*/ //21
        })//22
        readline.question('Seleccione una opción: ', (opt) => //23
        { //24
            readline.close(); /*Declaracion*/ //25
            resolve(opt); /*Declaracion*/ //26
        }) //27
    }); //28
} //29
const pausa = () => /*@Method*/ //30
{ //31
    return new Promise( resolve => //32
    { //33
        const readline = require('readline').createInterface( //34
        { //35
            input: process.stdin, /*Declaracion*/ //36
            output: process.stdout /*Declaracion*/ //37
        }); //38 
        readline.question(`\nPresione ENTER para continuar\n`, (opt) => //39
        { //40
            readline.close(); /*Declaracion*/ //41
            resolve(); /*Declaracion*/  //42
        }) //43
    }); //44
} //45
module.exports = //46
{ //47
    mostrarMenu, /*Declaracion*/ //48
    pausa /*Declaracion*/ //49
} //50