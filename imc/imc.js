const calcular=document.getElementById('calcular');

function imc() {
    const nome=document.getElementById('nome').value;
    const altura=document.getElementById('altura').value;
    const peso=document.getElementById('peso').value;
    const resultado=document.getElementById('resultado');

    if(nome!=='' && altura!=='' && peso!=='')
    {
        const valorIMC=(peso/(altura*altura)).toFixed(1);
        resultado.textContent="Caro " +nome+ "o seu peso é de " +valorIMC;
        
    }else{
        resultado.textContent="Preencha todos os campos";
    }

} 
calcular.addEventListener('click',imc);

