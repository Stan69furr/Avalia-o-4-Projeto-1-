document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();


    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

  
    let media = (nota1 + nota2 + nota3) / 3;

    let resultadoDiv = document.getElementById('resultado');
    let resultadoText = document.createElement('p');
    
    if (media >= 60) {
        resultadoText.textContent = `Aprovado! Média: ${media.toFixed(1)}`;
        resultadoText.classList.add('aprovado');
    } else {
        resultadoText.textContent = `Reprovado! Média: ${media.toFixed(1)}`;
        resultadoText.classList.add('reprovado');
    }

    resultadoDiv.innerHTML = ''; 
    resultadoDiv.appendChild(resultadoText);
});
