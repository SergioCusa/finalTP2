class Palabra {
  palabras = [];

  create = async (palabra) => {
    this.palabras.push(palabra);
    return "Ok";
  };

  getAll = async()=>{

    return this.palabras.join(" ")

  }

  delete = async (palabra) => {
    const initialLength = this.palabras.length;
    this.palabras = this.palabras.filter(p => p !== palabra);
    const deleted = this.palabras.length !== initialLength;
    return deleted ? "Ok" : "Palabra no encontrada";
  };
}



export default Palabra;
