
const listaDeTeclas = document.querySelectorAll('input[type=button]'); // recebe todas as teclas
const inputTel = document.querySelector('input[type=tel]'); // capiturar o imput (painel da tela)

for (let indice = 0; indice < listaDeTeclas.length; indice++) {   // percorrer cada tecla

  const tecla = listaDeTeclas[indice]; // cada tecla recebe o valor de sua tecla (para que a cada iteração, receba o valor correspondente da tecla)

  tecla.onclick = function () {  // ao clicar em cada tecla, o painel recebe o valor correspondente à tecla
    const valorTecla = tecla.value;
    if (valorTecla === "c") { // apagando a tela ao clicar em "c"
      inputTel.value = "";
    } else if (valorTecla === "<") { // apagando a última informação fornecida ao clicar em "<"
      inputTel.value = inputTel.value.slice(0, -1);
    } else if (valorTecla === "=") { // executar a operação informada pelo usuário utilizando a função eval()
      const resultado = eval(inputTel.value); 
      
      if (!isNaN(resultado)) { // Verificar se o resultado é um número válido
        inputTel.value = resultado; // exibir o resultado no campo de entrada
      } else {
        inputTel.value = "Erro"; // exibir "Erro" se a expressão for inválida
      }
    } else {
      inputTel.value += valorTecla;
    }
  }
}

