
var textOrigin = document.getElementById('textInput')
var result = document.getElementById('valorDigitado')

function upper(){

	 result.innerText = textOrigin.value.toUpperCase()
		 
}

function lower(){
	result.innerText = textOrigin.value.toLowerCase()
}