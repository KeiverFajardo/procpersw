const Nodo = require('./nodo');
class Nodos /*Declaracion*/
{
    constructor() /*Declaracion*/
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    cantidadElementosLista()/*@Method*/ /*Declaracion*/ 
    {
        console.log("Cantidad de elementos de la lista:", this.size);
    }
    agregarElemento( data = 0 )/*@Method*/ /*Declaracion*/ 
    {
        const newNode = new Nodo(data);
        if (!this.head) 
        {
            this.head = newNode;
            this.tail = newNode;
        } 
        else 
        {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size = this.size + 1;
        this.sum += data;
        this.squaredSum += data * data;
    }
    eliminarElementoPosicion( index = 0 )/*@Method*/ /*Declaracion*/ 
    {
        index -= 1; //Arreglo empieza en la posicion 0 hasta n-1; Al eliminar el primer nodo en la posicion 1 sera en la posicion 0 de la lista.
        if (index < 0 || index >= this.size || !this.head) 
        {
            console.log("Índice fuera de rango o lista vacía");
        }
        else
        {
            let current = this.head;
            let prev = null;
            let currentIndex = 0;
            while (currentIndex < index) 
            {
                prev = current;
                current = current.next;
                currentIndex = currentIndex + 1;
            }
            if (prev === null) 
            {
                this.head = current.next;
            } 
            else 
            {
                prev.next = current.next;
            }
            if (index === this.size - 1) 
            {
                this.tail = prev;
            }
            this.size = this.size - 1;
            this.sum -= current.data;
            this.squaredSum -= current.data * current.data;
            return current.data;
        }
    }
    buscarNodoPosicion( index = 0 )/*@Method*/ /*Declaracion*/ 
    {
        index -= 1; //Arreglo empieza en la posicion 0 hasta n-1; Al eliminar el primer nodo en la posicion 1 sera en la posicion 0 de la lista.
        if (index < 0 || index >= this.size || !this.head) 
        {
            console.log("Índice fuera de rango o lista vacía");
        }
        else
        {
            let current = this.head;
            let currentIndex = 0;
            while (currentIndex < index) 
            {
                current = current.next;
                currentIndex = currentIndex + 1; 
            }
            console.log("Nodo en la posición " + index + ": ", current.data);
            return current;
        }
    }
    calcularMedia()/*@Method*/ /*Declaracion*/ 
    {
        if (this.size === 0) 
        {
            console.log("La lista esta vacía, no se puede calcular la media.");
        }
        else
        {
            let current = this.head;
            let sum = 0;
            let count = 0;
            while (current !== null) 
            {
                sum = parseFloat(sum) + parseFloat(current.data);
                count = count + 1;
                current = current.next;
            }
            let media = parseFloat(sum) / parseFloat(count)
            console.log("Media: " + media.toFixed(2) + "\n");
            return media;
        }
    }
    calcularDesviacionEstandar()/*@Method*/ /*Declaracion*/ 
    {
        if (this.size === 0) 
        {
            console.log("La lista está vacía, no se puede calcular la desviación estandar");
        }
        else
        {
            const mean = this.calcularMedia();
            let current = this.head;
            let sumSquaredDifferences = 0;
            let count = 0;
            while (current !== null) 
            {
                const difference = current.data - mean;
                sumSquaredDifferences += difference * difference;
                count = count + 1;
                current = current.next;
            }
            const variance = sumSquaredDifferences / (count - 1);
            const standardDeviation = Math.sqrt(variance);
            console.log("Desviacion Estandar:", standardDeviation.toFixed(2));
            return standardDeviation;
        }
    }
    listarValoresNodos()/*@Method*/ /*Declaracion*/ 
    {
        if (this.size === 0) 
        {
            console.log("La lista esta vacía.");
        }
        else
        {
            let current = this.head;
            const values = 
            [
            ];
            while (current !== null) 
            {
                values.push(current.data); /*Declaracion*/ 
                current = current.next;
            }
            console.log("Valores de los nodos en la lista:\n", values.join(" \n "));
        }
    }
}
module.exports = Nodos;