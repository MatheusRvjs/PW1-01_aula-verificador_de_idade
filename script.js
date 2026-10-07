function verificarIdade() {

  const elementoInput = document.getElementById("campoIdade");
  const idadeDigitada = parseInt(elementoInput.value);
  const elementoInput2 = document.getElementById("campoNome");
  const nomeDigitado = String(elementoInput2.value);


  const elementoResultado = document.getElementById("mensagemResultado");


  if (isNaN(idadeDigitada)) {
    elementoResultado.innerText = "Por favor, digite uma idade numérica válida.";
    elementoResultado.style.color = "#dc2626";
    return;
  }


  if (idadeDigitada >= 18 && idadeDigitada < 60) {
    elementoResultado.innerText = `Olá, ${nomeDigitado}! Você é um adulto de ${idadeDigitada} anos e seu acesso está liberado.`;
    elementoResultado.style.color = "#16a34a";
    console.log(`Verificação aprovada: ${idadeDigitada} anos (Maior de idade)`);
  }

  else if (idadeDigitada >= 12 && idadeDigitada < 17){
    elementoResultado.innerText = `Olá, ${nomeDigitado}! Você tem ${idadeDigitada} anos e é um adolescente e seu acesso foi negado.`;
    elementoResultado.style.color = "#d97706";
    console.log(`Verificação aprovada: ${idadeDigitada} anos (Maior de idade)`);
  }

  else if (idadeDigitada < 12){
    elementoResultado.innerText = `Olá, ${nomeDigitado}! Você tem ${idadeDigitada} anos e é uma criança e seu acesso foi negado.`;
    elementoResultado.style.color = "#dc2626";
    console.log(`Verificação aprovada: ${idadeDigitada} anos (Maior de idade)`);
    }
  
  else if (idadeDigitada > 60){
    elementoResultado.innerText = `Olá, ${nomeDigitado}! Você tem ${idadeDigitada} anos e é um idoso e seu acesso foi liberado, você tem direito a atendimento preferencial.`;
    elementoResultado.style.color = "#16a34a";
    console.log(`Verificação aprovada: ${idadeDigitada} anos (Maior de idade)`);
  }

else {
    let DiferencaDeIdade = 18 - idadeDigitada;
    elementoResultado.innerText = `Olá, ${nomeDigitado}! Você tem ${idadeDigitada} anos e ainda é menor de idade. Faltam ${DiferencaDeIdade} ano(s) para atingir a maioridade.`;
    elementoResultado.style.color = "#d97706";
    console.log(`Verificação Informativa: ${DiferencaDeIdade} anos (Menor de idade)`);
  }
}