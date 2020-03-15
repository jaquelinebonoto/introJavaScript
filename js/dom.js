function botao(){
    alert("Obrigada")
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>"
}
function redirecionar(){
    window.open("https://www.facebook.com/")
    //window.location.href = "https://www.facebook.com/"
}

function trocar(elemento){
    //document.getElementById("mouseOver").innerHTML = "Obrigada por testar"
    elemento.innerHTML = "Obrigada por testar"
}

function voltar(elemento){
    //document.getElementById("mouseOver").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function muda(elemento){
    console.log(elemento.value)
}