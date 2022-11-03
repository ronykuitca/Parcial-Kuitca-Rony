import config from "../config.js";
import NumerosFactoryDAO from '../model/DAO/numerosFactory.js'

class ApiNumeros{
    constructor() {
        this.numerosModel = NumerosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerNumeros = async id => {
        return await this.numerosModel.findNumeros()
    }

    guardarNumero = async numero => {
        return await this.numerosModel.saveNumero(numero)
    }

    findPromedio = async id =>{
        return await this.numerosModel.findPromedio()
    }

    findCantidad = async id =>{
        return await this.numerosModel.findCantidad()
    }

    findMinMax = async id =>{
        return await this.numerosModel.findMinMax()
    }

 /*    obtenerPromedio = async id => {
        return await this.numerosModel.getPromedio()
    } */
}

export default ApiNumeros