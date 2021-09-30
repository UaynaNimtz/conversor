console.log("Segunda Aula")
console.log("Conversor");

function Converter(){
	//DOM - Document Object Model

	/** PEGAR VALOR DO CAMPO */
	// let valorEmDolar = document.getElementById("valor").value=100
	
	let valorEmDolar= document.querySelector("#valor").value

	/** CONVERTER O VALOR DO CAMPO EM NÚMERO */
	let valorEmDolarNumerico = parseFloat(valorEmDolar)

	let cotacaoDolar = 5.42
	let valorEmReal = valorEmDolarNumerico*cotacaoDolar

	/** INSERIR O RESULTADO NA TELA */
	// console.log(valorEmReal)

	document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$" + valorEmReal.toFixed(2)

	/** CALCULAR BITCOIN */

	let bitcoin = valorEmReal / 225857.44
	document.querySelector("#valorBitcoin").innerHTML = "O resultado em Bitcoin é " + bitcoin.toFixed(2)
}