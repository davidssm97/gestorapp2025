export async function consultarImagenes(){

    //1.para donde voy (uri api)
    const URL="https://api.pexels.com/v1/search?query=bogota&per_page=10"

    //2.configuro la peticion
    const TOKEN="5DQWgQa8sLvrBlgj3Zy6iQXFRyPOsZopot3vjgb2qVTFKSS73Vpy7iNY"

    let peticion={
        method:"GET",
        headers:{"Authorization":TOKEN}
    }

    //3. Consumir el API
    let respuestaAPI=await fetch(URL,peticion)
    let fotos=await respuestaAPI.json()
    return(fotos)

}