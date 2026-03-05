export const configFinal = (...configs)=>{
    try{
        for(let i of configs){
            // que sea obligatoriamente diferente a objeto
            if(typeof i !== "object" || i === null){
                throw new Error("Error, algun dato no es objeto");
            }
        }
        // Spread para unir los objetos y se añade la validacion de true
        return{
            ...configs[0],
            ...configs[1],
            validacion:true
        }
    }
    // Si falla, se devuelve false
    catch (error){
        validacion:false
    }
}