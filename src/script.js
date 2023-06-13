function Converter() {
  var valorMoeda = document.getElementById("valor");
  var valor = valorMoeda.value;
  var valorEmDolar = parseFloat(valor);
  console.log(valorEmDolar + " Valor Em Dolar");

  var valorEmReal = valorEmDolar * 5;
  console.log(valorEmReal + " Valor Em Real");

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Valor em Real é de R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
  var valorBitcoin = document.getElementById("valorBitcoin");
  var valorBt = valorBitcoin.value;
  var valorDoBitcoin = parseFloat(valorBt);

  var valorEmBitcoin = valorDoBitcoin * 0.00001;

  var elementoValorConvertidoBitcoin = document.getElementById(
    "valorConvertidoBitcoin"
  );
  var valorConvertidoBitcoin = "O valor em Bitcoin é de " + valorEmBitcoin;
  elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
}
