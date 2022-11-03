import CnxMongoDB from '../DB.js'
import { ObjectId } from "mongodb"

class NumerosMongoDAO{


    findNumeros = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()
            return numeros
        }
        catch {
            return []
        }
    }

    saveNumero = async numero => {
        if(!CnxMongoDB.connection) return {}

        numero.numero = parseInt(numero.numero)
        await CnxMongoDB.db.collection('numeros').insertOne(numero)
        return numero    
    }

    findPromedio = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').aggregate([{$group: { _id: null, avg: { $avg: '$numero'}}}]).toArray()
            let promedio = {
                "promedio": numeros
            }
            return promedio
        }
        catch {
            return []
        }
    }

    findCantidad = async ()  => {
        if(!CnxMongoDB.connection) return []
    
         try {
            let numeros = await CnxMongoDB.db.collection('numeros').count()
            let cantidad = {
                "cantidad": numeros
            }
            return cantidad
        }
        catch {
            return []
        }
    } 

    findMinMax = async ()  =>{
    if(!CnxMongoDB.connection) return []
    try{       
        minimo = db.collection('numeros').find().sort({numero:-1}).limit(1)
        maximo = db.collection('numeros').find().sort({numero:+1}).limit(1)

        let minMax = {
            "min" :minimo,
            "max":maximo
        }

        return minMax
    }
    catch {
        return []
    }
}
    
}

export default NumerosMongoDAO