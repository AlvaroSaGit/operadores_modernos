
import { usando_destructuracion,usando_spread} from "./operaciones/index.js";

const defaults = {tema: "claro", idioma: "español"}
const perzonalizadas = {tema: "oscuro", idioma: "ingles"}

// imprimimos las configuraciones por defecto y personalizadas
console.log ("la configuracion por defecto es : " + "tema: " + defaults.tema + ", idioma: " + defaults.idioma);
console.log("la configuracion perzonalizadas es : " + "tema: " + perzonalizadas.tema + ", idioma: " + perzonalizadas.idioma);


// utilizamos la función usando_spread para combinar ambas configuraciones sin mutarlas y obtener una nueva configuración final.
const configuracionfinal = usando_spread(defaults,perzonalizadas);
// utilizamos la función usando_destructuracion para extraer el valor de idioma de la configuración final 
// imprimimos el idioma 
console.log("el idioma es : " + idioma);