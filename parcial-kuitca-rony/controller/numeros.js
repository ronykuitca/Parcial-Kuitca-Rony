import ApiNumeros from "../api/numeros.js";

class ControladorNumeros{

    constructor() {
        this.ApiNumeros = new ApiNumeros()
    }

    getNumeros = async (req,res) => {
        const { id } = req.params
        res.json( await this.ApiNumeros.obtenerNumeros(id))
    }

    postNumero = async (req,res) => {
    /*const numero = req.body
        res.json(await this.ApiNumeros.guardarNumero(numero)) */

        try {
            let numero = req.body
            let numeroGuardado = await this.ApiNumeros.guardarNumero(numero)

            res.json(numeroGuardado)
        }
        catch(error) {
            console.log('error obtenerPalabras', error)
        }
    }

/*     getPromedio = async (req,res) => {
        const { id } = req.params
        res.json( await this.ApiNumeros.obtenerPromedio(id))
    } */

    findPromedio = async (req,res) =>{
        res.json(await this.ApiNumeros.findPromedio())
    }

    findCantidad = async (req,res) =>{
        res.json(await this.ApiNumeros.findCantidad())
    }

    findMinMax = async (req,res) =>{
        res.json(await this.ApiNumeros.findMinMax())
    }



}

export default ControladorNumeros