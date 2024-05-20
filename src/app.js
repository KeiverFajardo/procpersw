//Programa debe leer los n números reales desde la entrada estándar.
//Introduzca la cantidad de numeros reales a introducir. N 
//1.-Tamaño estimado en LOC del valor N
//2.-Horas de Desarrollo del valor N
//Desarrollar consola interactiva 


//Utilizar una lista encadenada para almacenar los n números.


//Por lo menos dos pruebas deben utilizar los datos en las columnas de la tabla 1. Los resultados previstos se proporcionan en la tabla 2. 


//Las listas encadenadas se implementan con punteros. 
//• Un cabezal
//• Una lista de nodos


//Operaciones requeridas
//- 
//- Cantidad de elementos de la lista.
//- Agregar un elemento.
//- Eliminar un elemento dada su posición en la lista.
//- Devolver un nodo dada su posición en la lista. 
//- Calcular la media
//- Calcular la desviación estándar


//Programa que calcule la media de un conjunto de n números reales. 


//Programa que calcule la desviación estándar de un conjunto de n números reales

require('colors');

const 
{ 
    inquirerMenu, /*Declaracion*/ 
    pausa, /*Declaracion*/ 
    leerInput /*Declaracion*/ 
} = require('./inquirer');

const Nodos = require('./nodos');

const main = async() => 
{

    let opt = ''; 
    const nodos = new Nodos();

    do 
    {
        // Imprimir el menú
        opt = await inquirerMenu();

        switch (opt) 
        {
            case '1':
                // cantidad de elementos en la lista
                nodos.cantidadElementosLista(); /*Declaracion*/ 
            break;

            case '2':
                // Agregar un elemento
                const data = await leerInput('Dato:'); 
                nodos.agregarElemento( data ); /*Declaracion*/ 
            break;
            
            case '3': // Eliminar un elemento dada su posición en la lista
                const pos = await leerInput('Posición del elemento a eliminar:');
                nodos.eliminarElementoPosicion(pos); /*Declaracion*/ 
            break;

            case '4': // Devolver un nodo dada su posición en la lista
                const index = await leerInput('Posición del elemento a buscar:');
                nodos.buscarNodoPosicion(index); /*Declaracion*/ 
            break;

            case '5': // Calcular la media
                nodos.calcularMedia(); /*Declaracion*/ 
            break;
                       
            case '6': // Calcular la desviación estándar
                nodos.calcularDesviacionEstandar(); /*Declaracion*/ 
            break;

            case '7': // Listar los valores de los nodos
                nodos.listarValoresNodos(); /*Declaracion*/ 
            break;
        }
        await pausa();
    } 
    while( opt !== '0' );
}
main();