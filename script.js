// write your JS code here
var i = 0;
let j=0;
function buttonInc() {
	i++;
	j+=5.99;

	document.querySelector('input').value = i;
	document.querySelector(".price").innerHTML = j;

}
var i = 0;
function buttonDec() {
	i--;
	if (i<0) {
		i=0
		document.querySelector("input") = i;
	}
	document.querySelector('input').value = i;

}

