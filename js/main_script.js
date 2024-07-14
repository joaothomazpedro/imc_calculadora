window.onload = function calculo(){
    let btn = document.getElementById("btn_formd")

    btn.addEventListener("click", function(){
        var peso = document.getElementById("label_peso")
        var altura = document.getElementById("label_altura")

        imc = peso.value / (Math.pow(altura.value,2))

        resultado = alert("Seu IMC é : " + imc.toFixed(2))

        /* Limpando values */
        peso.value = "";
        altura.value = "";
    })
}