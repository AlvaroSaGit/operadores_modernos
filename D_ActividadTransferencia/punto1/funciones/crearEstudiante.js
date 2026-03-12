export const crearEstudiante=(nombre,...notas) =>{
    try{
        for(let numero of notas){
            if(typeof numero != "number"){
                throw new Error(`La nota ${notas} no es valido`);
            }
        }
        // Destructuracion
        const [primeraNota, ...todasNotas] = notas;
        
        // suma de todas las notas para luego hacer el promedio
        let suma = 0;
        // Recorriendo todasNotas que es un array que las contiene
        for(let i of todasNotas){
            suma = suma+i;
        }
        // Variable promedio
        let promedioResto=suma/todasNotas.length;

        //retornar el objeto
        return {
            nombre: nombre,
            primeraNota: primeraNota,
            promedio:promedioResto,
        }
    }
    catch (error){
        console.log("Hubo un problema",error.message);
        return null;
    }
}