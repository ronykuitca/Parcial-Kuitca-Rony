import express from 'express'
import ControladorNumeros from '../controller/numeros.js'

export class RouterNumeros {
    constructor() {
        this.router = express.Router()
        this.controladorNumeros = new ControladorNumeros()
    }

    start() {

        this.router.get('/', this.controladorNumeros.getNumeros)

        this.router.post('/', this.controladorNumeros.postNumero)

/*         this.router.get('/', this.controladorNumeros.getPromedio) */

        this.router.get('/promedio',this.controladorNumeros.findPromedio)

        this.router.get('/cantidad', this.controladorNumeros.findCantidad)

        this.router.get('/minmax', this.controladorNumeros.findMinMax)

        return this.router
    }

}