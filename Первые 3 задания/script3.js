var change = true;
var age = prompt('Какого вы возраста?','Введите сюда сколько вам лет');
while(change)
{
if (confirm('Вы уверены, что вам ' + age))
{
	alert("Спасибо, что уделили время");
	change = false;
}
else
{
	age = prompt('Какого вы возраста?','Введите сюда сколько вам лет');
}
}

