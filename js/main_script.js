window.onload = function calculo() {
    try {
        let btn = document.getElementById("btn_formd")

        btn.addEventListener("click", function () {
            var peso = document.getElementById("label_peso")
            var altura = document.getElementById("label_altura")

            imc = peso.value / (Math.pow(altura.value, 2))
            console.log(typeof(imc))

            resultado = imc.toFixed(2).toString()
            
            /* Limpar values */
            function reset_input(){
                peso.value = "";
                altura.value = "";
            }
            
            if (imc == Infinity){
                alert("Digite um valor válido")
                reset_input()
                return
            }
            if (imc < 18.4) {
                alert("Abaixo do peso ideal " + resultado)  
                reset_input()
            }
            if(imc >= 18.4 && imc < 24.9){
                alert("Peso normal " + resultado)
                reset_input()
            }
            if (imc >= 25 && imc < 29.9) {
                alert("Acima do peso ideal " + resultado)
                reset_input()
            }
            if (imc >= 30 && imc < 34.9) {
                alert("Obesidade Grau I " + resultado)
                reset_input()
            }
            if (imc >= 35 && imc < 40) {
                alert("Obesidade Grau II " + resultado)
                reset_input()
            }
            if (imc >= 40) {
                alert("Obesidade Grau III " + resultado)
                reset_input()
            }
        })
    }

    finally {
            /* Limpando values */
            reset_input()
    }
}