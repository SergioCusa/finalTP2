import SondaService from "../service/LecturaService.js";

class SondaController {
  sonda = new SondaService();

  createLectura = async (req, res) => {
    try {
      const { id, temperatura } = req.body;
      const nuevaLectura = await this.sonda.createLecturaService(
        id,
        temperatura
      );
      res.status(200).send(nuevaLectura);
    } catch (error) {
      res.status(422).send("Datos no válidos");
    }
  };

  getLecturas = async (req, res) => {
    try {
      const lecturas = await this.sonda.getLecturasService();
      res.status(200).send(lecturas);
    } catch (error) {
      res.status(422).send("No valida");
    }
  };

  getLecturasPorSonda = async (req, res) => {
    try {
      const { id } = req.params;
      const idParse = Number(id)
      const lecturas = await this.sonda.getLecturasPorSondaService(idParse);
      res.status(200).send(lecturas);
    } catch (error) {
      res.status(404).send("Número de sonda incorrecto");
    }
  };
}



export default SondaController;
