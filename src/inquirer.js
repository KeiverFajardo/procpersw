const inquirer = require('inquirer');
require('colors');

const preguntas = 
[
    {
        type: 'list', /*Declaracion*/ 
        name: 'opcion', /*Declaracion*/ 
        message: '¿Qué desea hacer?', /*Declaracion*/ 
        choices: /*Declaracion*/
        [
            {
                value: '1', /*Declaracion*/ 
                name: `1. Cantidad de elementos de la lista` /*Declaracion*/ 
            },
            {
                value: '2', /*Declaracion*/ 
                name: `2. Agregar un elemento` /*Declaracion*/ 
            },
            {
                value: '3', /*Declaracion*/ 
                name: `3. Eliminar un elemento dada su posición en la lista` /*Declaracion*/ 
            },
            {
                value: '4', /*Declaracion*/ 
                name: `4. Devolver un nodo dada su posición en la lista` /*Declaracion*/ 
            },
            {
                value: '5', /*Declaracion*/ 
                name: `5. Calcular la media` /*Declaracion*/ 
            },
            {
                value: '6', /*Declaracion*/ 
                name: `6. Calcular la desviación estándar` /*Declaracion*/ 
            },
            {
                value: '7', /*Declaracion*/ 
                name: `7. Listar los valores de los nodos` /*Declaracion*/ 
            },
            {
                value: '0', /*Declaracion*/ 
                name: `0. Salir` /*Declaracion*/ 
            },
            
        ]
    }
];

const inquirerMenu = async() => /*@Method*/
{

    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.white );
    console.log('==========================\n'.green);

    const 
    { 
        opcion /*Declaracion*/ 
    } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => /*@Method*/
{
    const question = 
    [
        {
            type: 'input', /*Declaracion*/ 
            name: 'enter', /*Declaracion*/ 
            message: `Presione enter para continuar` /*Declaracion*/ 
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message ) => /*@Method*/
{
    const question = 
    [
        {
            type: 'input', /*Declaracion*/ 
            name: 'desc', /*Declaracion*/ 
            message, /*Declaracion*/ 
            validate( value )  /*Declaracion*/ 
            {
                if( value.length === 0 ) 
                {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const 
    { 
        desc /*Declaracion*/ 
    } = await inquirer.prompt(question);
    return desc;
}

const confirmar = async(message) => /*@Method*/
{
    const question = 
    
    [
        {
            type: 'confirm', /*Declaracion*/ 
            name: 'ok', /*Declaracion*/ 
            message /*Declaracion*/ 
        }
    ];

    const 
    { 
        ok /*Declaracion*/ 
    } = await inquirer.prompt(question);
    return ok;
}   


module.exports = 
{
    inquirerMenu, /*Declaracion*/ 
    pausa, /*Declaracion*/ 
    leerInput, /*Declaracion*/ 
    confirmar /*Declaracion*/ 
}
