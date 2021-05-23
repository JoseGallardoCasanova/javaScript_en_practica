


let sumar = document.getElementById('btn-sumar');
sumar.addEventListener('click', function () {
    var valor1 = document.getElementById("valor1").value;    
    var valor2 = document.getElementById("valor2").value;
    valor2 = parseInt(valor2)
    valor1 = parseInt(valor1)
    var suma = valor1 + valor2
    
    document.querySelector(".resultado").innerHTML =  suma;
}
);


let restar = document.getElementById('btn-restar');
restar.addEventListener('click', function () {
    var valor1 = document.getElementById("valor1").value;    
    var valor2 = document.getElementById("valor2").value;
    valor2 = parseInt(valor2)
    valor1 = parseInt(valor1)
    var resta = valor1 - valor2
    if (resta >= 0) {
        document.querySelector(".resultado").innerHTML =  resta;
    } else if (resta <= 0) 
        document.querySelector(".resultado").innerHTML =  "0";
}
);
