const progressBar = (array) => {
    let contadorTrue = 0;
    let total = array.length

    array.forEach((objeto) => {
      if (objeto.estado === true) {
        contadorTrue++;
      } 
    });
    return contadorTrue * 100 / total
  };

  export default progressBar