const contarTildes = palabra => {
 
    const tildes = "áéíóú";
    let cantidadTildes = 0;
    for (const letra of palabra) {
        if (tildes.includes(letra.toLowerCase())) {
            cantidadTildes++;
        }
    }
    return cantidadTildes;
};


const cadena = "Tarea de programación 9: busqueda de tíldes. á é í ó ú ÁÉÍÓÚ";
const tildes = contarTildes(cadena);
console.log("La cadena '%s' tiene %d tildes", cadena, tildes);