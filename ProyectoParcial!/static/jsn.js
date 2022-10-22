function crear(){
    si = "";
    nombre = document.getElementById("Nombre").value;
    fecha = document.getElementById("Fecha").value;
    numero = document.getElementById("Numero").value;
    email = document.getElementById("Email").value;
    ocupacion = document.getElementById("Ocupacion").value;
    texto = document.getElementById("Perfil").value;
    var si = document.getElementById("lang");
    var Leng = document.getElementById("Lenguajes");
    var Dib = document.getElementById("Dibujar");
    var Med = document.getElementById("Meditar");
    var done = 0;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (nombre.length==0){
        document.getElementById("tag1").innerHTML = "Ingrese un formato valido";
        document.getElementById("tag1").style.color = "red";
        done = done + 1;
    }
    if(fecha.length==0){
        document.getElementById("tag2").innerHTML = "Seleccione una fecha";
        document.getElementById("tag2").style.color = "red";
        done = done + 1;
    }
    if (numero.length==0 || isNaN(numero)){
        document.getElementById("tag3").innerHTML = "Ingrese un formato valido";
        document.getElementById("tag3").style.color = "red";
        done = done + 1;     
    }
    if (email.length==0 || !(emailRegex.test(email))){
        document.getElementById("tag4").innerHTML = "Ingrese un formato valido";
        document.getElementById("tag4").style.color = "red";
        done = done + 1;      
    }
    for(var i=0; i < Leng.options.length; i++){

        if(Leng.options[i].selected == true){
            si.value = si.value + Leng.options[i].value + " " ; 
        }
    }
    if(si.value == ""){
        document.getElementById("lenguajes").innerHTML = "Ingrese una opcion valido";
        document.getElementById("lenguajes").style.color = "red";
        done = done + 1;    
    }
    if (ocupacion.length==0 || /^\s+$/.test(ocupacion)){
        document.getElementById("tag5").innerHTML = "Ingrese un formato valido";
        document.getElementById("tag5").style.color = "red";
        done = done + 1;   
    }
    if(!(Dibujar.checked)&&!(Meditar.checked)){
        document.getElementById("habilidades").innerHTML = "Seleccione al menos una";
        document.getElementById("habilidades").style.color = "red";
        done = done + 1;
    }
    if(texto.length == 0 || /^\s+$/.test(texto)){
        document.getElementById("perfil").innerHTML = "Ingrese algo!";
        document.getElementById("perfil").style.color = "red";
        done = done + 1;
    }
    if(done == 0){
        document.form_action.submit();
    }
};