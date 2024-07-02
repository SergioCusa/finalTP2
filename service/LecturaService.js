import Lectura from "../Model/Lectura.js";

class SondaService {
  lectura = new Lectura();

  createLecturaService = async (id, temperatura) => {
    try {
      if (!Number.isInteger(id) || id < 1 || id > 5) throw error;
      if (
        typeof temperatura !== "number" ||
        temperatura < -20 ||
        temperatura > 100
      )
        throw error;
      const nuevaLEctura = await this.lectura.create(id, temperatura);
      return nuevaLEctura;
    } catch (error) {
      throw error;
    }
  };

  getLecturasService = async (req, res) => {
    const lecturas = await this.lectura.getAll();
    return lecturas;
  };

  getLecturasPorSondaService = async (id) => {
    if (!Number.isInteger(id) || id < 1 || id > 5) throw error;
    const lecturas = await this.lectura.getByIdSonda(id);
    return lecturas;
  };
}

export default SondaService;
