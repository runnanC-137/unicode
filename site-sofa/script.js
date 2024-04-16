var imgatual = "./assets/sofa.png"
var imganterior = "./assets/sofa360.gif"
var iconatual = "./assets/360.png"
var iconanterior = "./assets/x.png"

function mudar(){
    document.getElementById("sofa").src = imgatual;
    document.getElementById("botao").src = iconatual;
    let aux = imgatual;
    let aux1 = iconatual;
    imgatual = imganterior;
    iconatual = iconanterior;
    imganterior = aux;
    iconanterior = aux1;
}