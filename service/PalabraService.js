import Palabra from "../Model/Palabra.js";

class PalabraService{

    palabra = new Palabra()

    createPalabraService = async(palabra)=>{
        try {
            if(!(/^[a-zA-Z]+/.test(palabra))) throw error
            const newPAlabra = await this.palabra.create(palabra)
            return newPAlabra
        } catch (error) {
            throw error
        }
    }

    getPalabrasService = async(req, res)=>{
        const palabras = await this.palabra.getAll()
        return palabras
    }

    getCantidadPalabrasService = async (cantidad) => {
        try {
            const cantidadNumber = Number(cantidad)
            console.log(typeof cantidadNumber)
            if (typeof cantidadNumber !== 'number' || isNaN(cantidadNumber)) throw error
            const data = await fetch(`https://texto.deno.dev/palabras?cantidad=${cantidadNumber}`);
            const newPalabras = await data.json();
            return newPalabras;
        } catch (error) {
            throw error;
        }
    }

    deletePalabraService = async (palabra) =>{
        try {
            if(!(/^[a-zA-Z]+/.test(palabra))) throw error
            const newPAlabras = await this.palabra.delete(palabra)
            return newPAlabras
        } catch (error) {
            throw error
        }
    }

}

export default PalabraService