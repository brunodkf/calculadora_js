var num = document.querySelectorAll('.num');
var operadores = document.querySelectorAll('.operadores');

var painel = document.querySelector('.painel-calculadora');



    for(var i = 0; i < num.length; i++) {
    
        num[i].addEventListener('click', function(){
                painel.value += this.value;
            
        });
    };

    for(var i = 0; i < operadores.length; i++) {
        operadores[i].addEventListener('click', function(){  
            painel.value += this.value;
        });
    };



var limpa = document.querySelector('#limpa');
limpa.onclick = limpar;
function limpar(){
    painel.value = '';
}


var calc = document.querySelector('#resultado');
calc.onclick = resolver;
function resolver(){
    var resultado = eval(painel.value);
    painel.value = resultado;

    console.log(eval(painel.value))
};

