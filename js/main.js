
function clicar() {
    let numero = document.getElementById("number").value
    let res = document.getElementById("res")
    let calc = (numero - 60) * 100
    
    res.style.display = "flex"
    
    if (numero == ""){
        res.innerHTML = "<p>Por favor, digite a sua quilometragem!</p>"
    }else if (numero <= 60) {
        res.innerHTML = `<p>Tudo certo, você estava dentro do limite permitido, sua velocidade era de: <strong>${60-numero}Km/h a menos que o limite permitido</strong></p>`
    }else {
        res.innerHTML = `<p>Você foi multado(a) em:<strong> R$${calc}</strong>. Com ${numero-60}Km/h a mais que o permitido</p>`
    }
}