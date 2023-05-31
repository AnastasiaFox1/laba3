var a = 0;
var b = 0;

document.getElementById('btn').addEventListener("click", Calc);

function Calc(){
	a = document.getElementById('A').value;
	b = document.getElementById('B').value;
	alert(a);
	var c = parseInt(a,10) + parseInt(b,10);
	if(parseInt(a,10) < parseInt(b,10))
	alert(a);
	else
	alert(b);
}
