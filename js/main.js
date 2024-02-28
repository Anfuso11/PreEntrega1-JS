alert("¡Bienvenido/a a la fiesta!");

let edad = 0;

do {
    edad = parseInt(prompt("Ingrese su edad o 0 para cancelar la entrada a la fiesta"));
} while (isNaN(edad)); //verificamos si es un numero.

if(edad!=0){
    if (edad < 18) {
        alert("No puedes entrar");
    
    } else if (edad < 50) {
        alert("Puedes entrar a la fiesta");
    
        let ingreseNombre = prompt("Ingrese su nombre");
        let ingreseApellido = prompt("Ingrese su apellido");
    
        function saludar(nombre, apellido) {
            alert("Bienvenido, " + nombre + " " + apellido);
        }
    
        saludar(ingreseNombre, ingreseApellido);
    } else {
        alert("Eres muy grande no puedes entrar");
    }
} else {
    alert("Cancelaste la entrada a la fiesta.");
}