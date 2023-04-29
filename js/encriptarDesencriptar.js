/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
*/

var msjEncriptado = "";

var vocales = ["e","i","a","o","u"];
var claves = ["enter","imes","ai","ober","ufat"];

function desencriptando(sustituir, buscar){
	var regexRemplaso = new RegExp("(" + sustituir + ")");
	var n = msjEncriptado.search(regexRemplaso);
	while(n != -1){
		msjEncriptado = msjEncriptado.replace(sustituir, buscar);
		n = msjEncriptado.search(regexRemplaso);
		console.log(msjEncriptado);
	}	
}

function obtenerClaveDecifrar(vocal){
	var clave = ""
	switch (vocal) {
	  case "e":
	    clave = "enter"
	    break;
	  case "i":
	    clave = "imes"
	    break;
	  case "a":
	    clave = "ai";
	    break;
	  case "o":
	    clave = "ober";
	    break;
	  case "u":
	    clave = "ufat";
	    break;
	}

	return clave;
}

function obtenerVocal(clave){
	var vocal = ""
	switch (clave) {
	  case "enter":
	    vocal = "e"
	    break;
	  case "imes":
	    vocal = "i"
	    break;
	  case "ai":
	    vocal = "a";
	    break;
	  case "ober":
	    vocal = "o";
	    break;
	  case "ufat":
	    vocal = "u";
	    break;
	}

	return vocal;
}

function desencriptar(){
	var pasoValidacion = validarTexto();
	if(pasoValidacion){
		for(var i = 0; i < vocales.length; i++){
		var vocal = vocales[i];
		var clave = obtenerClaveDecifrar(vocal);
		desencriptando(clave, vocal);	
		}
		document.getElementById("resultado").value = msjEncriptado;	
	}
	
}


function encriptado(sustituir, buscar){
	if(msjEncriptado.includes(sustituir)) {
		msjEncriptado = msjEncriptado.replaceAll(sustituir, buscar);
	}
}

function encriptar(){
	var pasoValidacion = validarTexto();
	console.log("Paso la validación: "+pasoValidacion);
	if(pasoValidacion){
		for(var i = 0; i < claves.length; i++){
			var clave = claves[i];
			var vocal = obtenerVocal(clave);
			encriptado(vocal, clave);	
		}
		document.getElementById("resultado").value = msjEncriptado;
	}
}

function copyOnClick() {
	let mensaje = document.querySelector("#resultado");
	navigator.clipboard.writeText(mensaje.value)
	alert("Mensaje copiado");
	limpiarCampos();
}

function limpiarCampos(){
	document.getElementById("resultado").value = "";
	document.getElementById("textoOriginal").value = "";
}

function validarTexto(){
	var pasaValidacion = true;
	msjEncriptado = "";
	msjEncriptado = document.getElementById("textoOriginal").value;
	var mayusculas = msjEncriptado.search(/[A-Z]/g);
	var asentos = msjEncriptado.search(/[áéíóú]/g);
	if(mayusculas != -1 || asentos!= -1){
		alert("El mensaje contine mayusculas o algún acento favor de validar el contenido")
		pasaValidacion = false;
	}

	return pasaValidacion; 
}
