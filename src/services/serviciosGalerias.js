export async function consultarImagenes(termino = "bogota") {
    const URL = `https://api.pexels.com/v1/search?query=${termino}&per_page=12`;
    const TOKEN = "5DQWgQa8sLvrBlgj3Zy6iQXFRyPOsZopot3vjgb2qVTFKSS73Vpy7iNY";
  
    const peticion = {
      method: "GET",
      headers: { Authorization: TOKEN },
    };
  
    const respuestaAPI = await fetch(URL, peticion);
    const fotos = await respuestaAPI.json();
    return fotos;
  }
  