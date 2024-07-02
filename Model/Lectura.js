class Lectura {

  lecturas = [];



  create = async (id, temperatura) => {
    const fechaHora = new Date().toISOString();
    const nuevaLectura = { id, temperatura, fechaHora };
    this.lecturas.push(nuevaLectura);
    return nuevaLectura;

  };

  getAll = async()=>{

    return this.lecturas

  }

  getByIdSonda = async (id) => {
    return this.lecturas.filter(l => l.id === id);
  }

}



export default Lectura;
