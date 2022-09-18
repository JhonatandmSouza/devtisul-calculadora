const display = document.querySelector("#txtDisplay");
const botoes = document.querySelectorAll("button");
let valor = '';
let resultado = 0;
let finalizar = false;

for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("click", function(){
        valor = botoes[i].value;
        calcular(valor);
    })
}

function calcular(valor) {
    if(finalizar == true){
        display.value = '';
    }
    
    if (valor == 'limpar'){
        finalizar = false;
        display.value = '';
    } else if(valor == 'apagar'){
        finalizar = false;
        display.value = display.value.substring(0, display.value.length - 1);
    } else if(valor != '='){
        finalizar = false;
        display.value += valor;
    } else {
        finalizar = true;
        resultado = eval(display.value);
        display.value = resultado;
    }

}