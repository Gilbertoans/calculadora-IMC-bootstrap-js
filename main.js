var calcular = document.getElementById('calcular')

function gerarCalcular() {
  var nome = document.getElementById('nome').value
  var altura = document.getElementById('altura').value
  altura = parseFloat(altura)
  altura = altura / 100
  var peso = document.getElementById('peso').value
  peso = parseFloat(peso)
  var resultado = document.getElementById('resultado')

  if (nome == '') {
    alert('nome vazio')
  }

  if (altura == '') {
    alert('altura vazio')
  }

  if (peso == '') {
    alert('peso vazio')
  }

  var valorIMC = peso / (altura * altura)
  valorIMC = valorIMC.toFixed(2)

  if (valorIMC < 16) {
    resultado.textContent =
      nome + ' seu IMC é: ' + valorIMC + '  Baixo peso muito grave'
  }
  if (valorIMC >= 16 && valorIMC <= 16.99) {
    resultado.textContent =
      nome + ' seu IMC é: ' + valorIMC + '  Baixo peso Grave'
  }
  if (valorIMC >= 17 && valorIMC <= 18.49) {
    resultado.textContent = nome + ' seu IMC é: ' + valorIMC + '  Baixo peso'
  }
  if (valorIMC >= 18.5 && valorIMC <= 24.99) {
    resultado.textContent = nome + ' seu IMC é: ' + valorIMC + '  Peso Normal'
  }
  if (valorIMC >= 25 && valorIMC <= 29.99) {
    resultado.textContent = nome + ' seu IMC é: ' + valorIMC + '  Sobrepeso'
  }
  if (valorIMC >= 30 && valorIMC <= 34.99) {
    resultado.textContent =
      nome + ' seu IMC é: ' + valorIMC + '  Obesidade Grau 1'
  }
  if (valorIMC >= 35 && valorIMC <= 39.99) {
    resultado.textContent =
      nome + ' seu IMC é: ' + valorIMC + '  Obesidade Grau 2'
  }
  if (valorIMC >= 40) {
    resultado.textContent =
      nome + ' seu IMC é: ' + valorIMC + '  Obesidade Grau 3'
  }
}

calcular.addEventListener('click', gerarCalcular)
