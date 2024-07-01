import PalabraService from "../service/PalabraService.js"
class PalabrasController{

    palabra = new  PalabraService()

    creataPalabra = async(req, res)=>{
        try {
            const {palabra} = req.body
            if(!palabra) throw error
            const newPalabra = await this.palabra.createPalabraService(palabra)
            res.status(200).send(newPalabra)
        } catch (error) {
            res.status(422).send("No valida")
        }
    }

    getPalabras = async(req, res)=>{
        try {
            const palabras = await this.palabra.getPalabrasService()
            res.status(200).send(palabras)
        } catch (error) {
            res.status(422).send("No valida")
        }
    }

    deletePalabra = async(req, res)=>{
        try {
            const { palabra } = req.body
            if(!palabra) throw error
            const result = await this.palabra.deletePalabraService(palabra)
            if (result === "Ok") {
                res.status(200).send(`Palabra "${palabra}" eliminada correctamente`);
            } else if (result === "Palabra no encontrada") {
                res.status(404).send(`Palabra "${palabra}" no encontrada`);
            } else {
                res.status(422).send("Palabra no válida");
            }
        } catch (error) {
            res.status(500).send("Error al eliminar la palabra");
        }
    };

    getCantidadPalabras = async(req, res)=>{
        try {
            const {cantidad} = req.params
            console.log(typeof cantidad)
            if(!cantidad) throw error
            const data = await this.palabra.getCantidadPalabrasService(cantidad)
            res.status(200).send(data)
        } catch (error) {
            res.status(422).send("Entrada no valida, ingrese un numero")
        }
    }

}

// const palabraValida = (palabra)=>{
//     return /^[a-zA-Z]+/.test(palabra)
// }

export default PalabrasController