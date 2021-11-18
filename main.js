
var textOrigin = document.getElementById('textInput')
var result = document.getElementById('valorDigitado')

function upper(){

	 result.innerText = textOrigin.value.toUpperCase()
	
		 
}

function lower(){
	result.innerText = textOrigin.value.toLowerCase()
}

function firstUpper(){
	var firstLetter = textOrigin.value.slice(0, 1)
	var stringLeft = textOrigin.value.slice(1)


	result.innerText = firstLetter.toUpperCase() + stringLeft.toLowerCase()


}
