document .addEventListener('DOMContentLoaded', function ()
const botaoAcessibilidade = document.getElementById ('botaoAcessibilidade');
const opcoesAcessibilidade = document.getElementByid ('apresenta-lista');

botaoAcessibilidade.addEventListener('click',function(){
    botaoAcessibilidade.classList.toggle('rotaca-menu');
    opcoesAcessibilidade.classList.toggle('apresenta-lista');

}
const aumentaFonteBotao = document.getElementById('aumentar-fonte');
const diminuirFonteBotao = document.getElementById('diminuir-fonte');
let tamanhoFonteAtual = 1;

aumentaFonteBotao

