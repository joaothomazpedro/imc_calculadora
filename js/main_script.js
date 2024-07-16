window.onload = function calculo() {
    try {
        let btn = document.getElementById("btn_formd")

        btn.addEventListener("click", function () {
            var peso = document.getElementById("label_peso")
            var altura = document.getElementById("label_altura")

            imc = peso.value / (Math.pow(altura.value, 2))

            resultado = imc.toFixed(2).toString()

            if (imc < 18.4) {
                alert("Abaixo do peso ideal " + resultado)  
            }
            else if(imc == 18.5 && imc < 24.9){
                alert("Peso normal " + resultado)
            }
            if (imc == 25 && imc < 29.9) {
                alert("Acima do peso ideal " + resultado)
            }
            if (imc == 30 && imc < 34.9) {
                alert("Obesidade Grau I " + resultado)
            }
            if (imc == 35 && imc < 40) {
                alert("Obesidade Grau II " + resultado)
            }
            if (imc > 40) {
                alert("Obesidade Grau III " + resultado)
            }

            console.log(" " + imc)
            /* Limpando values */
            peso.value = "";
            altura.value = "";
        })
    }
    catch (erro) {
        if (peso && altura < 0) {
            alert("Digite peso e alturas válidos")
        }
    }
    finally {
        /* Limpando values */
        peso.value = "";
        altura.value = "";
    }
}