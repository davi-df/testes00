
function calcular() {
    //__________BUSCANDO O VALOR DADO AOS INPUTS A, B e C_____________
    let a = document.getElementById("inptA").value;
    let b = document.getElementById("inptB").value;
    let c = document.getElementById("inptC").value;

    //__________________ÁREA DE CÁLCULOS______________________________
    const delta = (b**2) - (4 * a * c);
    const bhaskara = (-b + (Math.sqrt(delta))) / (2 * a);
    const bhaskara1 = (-b - (Math.sqrt(delta))) / (2 * a);
    // Imprime na div vazia o resultado   
    let mostra = document.getElementById("res").innerHTML += `DELTA É: ${delta}<br> BHASKARA x¹ É ${bhaskara}<br> BHASKARA x² É ${bhaskara1}` ;

    //__ZERANDO OS VALORES DIGITADOS NOS INPUTS_______________________
    document.getElementById("inptA").value = 0;
    document.getElementById("inptB").value = 0;
    document.getElementById("inptC").value = 0;
    }
function modoClaro(){
    const tema = document.getElementById("tema");
    const body = document.body;

    tema.addEventListener('click', ()=> {
        body.classList.toggle('light-mode');
    });
}