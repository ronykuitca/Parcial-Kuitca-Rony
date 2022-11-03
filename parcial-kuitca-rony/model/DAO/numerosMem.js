class NumerosMemDAO {

    constructor() {
        this.numeros = [
            {numero: 5},
            {numero: 8},
        ]
    }

    findNumeros = async ()  => {
        try {
            return this.numeros
        }
        catch {
            return []
        }
    }

    saveNumero = async numero => {
        numero.numero = parseInt(numero.numero)
        
        this.numeros.push(numero)

        return numero    
    }

    findPromedio = async ()=> {
         average =  this.numeros.reduce((a, b) => a + b, 0) / this.numeros.length;
         let promedio = {
            "promedio": average
        }
        return promedio
    }

    findCantidad = async ()=>{
        cantidad = this.numeros.length

        let cant = {
            "cantidad": cantidad
        }
        return cant
    }

    findMinMax = async ()=>{
        
            let min = Infinity;
            let max = -Infinity;
    
            this.numeros.forEach( n => {
                if (n <= min) min = n;
                if (n >= max) max = n;
            })
            return { min, max }
        
      /*   let minElement = Math.min.apply(Math, this.numeros);
        let maxElement = Math.max.apply(Math, this.numeros)

        let minMax = {
            "Min": minElement,
            "Max": maxElement
        }
        return minMax */
    }

}

export default NumerosMemDAO