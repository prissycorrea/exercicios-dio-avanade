var numberWrap = document.getElementById("numeroAtual");
var numeroAtual = 0

function increment( ) { 
    numeroAtual = numeroAtual + 1;
    numberWrap.innerHTML = numeroAtual
}
function decrement( ) {
    numeroAtual = numeroAtual - 1;
    numberWrap.innerHTML = numeroAtual
}