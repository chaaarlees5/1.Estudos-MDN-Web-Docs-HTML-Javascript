//Constantes para jogar os valores no HTML
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//Função para sortear os textos de modificação
function randomValueFromArray(array){
	const random = Math.floor(Math.random()*array.length);
	return array[random];
}
//História e complementos.
var storyText = "Estava 34°C lá fora, então :insertx: foi dar um passeio. Quando eles chegaram na :inserty:, eles olharam horrorizados por alguns momentos, depois :insertz:. Bob viu tudo, mas não se surpreendeu - :insertx: pesa 135 quilos e foi um dia quente.";
var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['cozinha', 'Disneylandia', 'Casa Branca'];
var insertZ = ['combustão espontânea', 'derreteu em uma poça na calçada', 'se transformou em uma lesma e rastejou para longe'];

randomize.addEventListener('click', result);

function result() {
	
	var newHistory = storyText;
	var xItem = randomValueFromArray(insertX);
	var yItem = randomValueFromArray(insertY);
	var zItem = randomValueFromArray(insertZ);
	
	newHistory = newHistory.replace(':insertx:', xItem);
	newHistory = newHistory.replace(':insertx:', xItem);
	newHistory = newHistory.replace(':inserty:', yItem);
	newHistory = newHistory.replace(':insertz:', zItem);
	
	if(customName.value !== '') {
		let name = customName.value;
		newHistory = newHistory.replace('Bob', name);
	} else {
		window.alert('Você não digitou um nome, portanto o nome padrão será Bob')
	}

	if(document.getElementById("uk").checked) {
		let weight = Math.round(300/14) + " stone";
		let temperature =  Math.round((94-32) * (5/9)) + " centigrade";
		newHistory = newHistory.replace('135 quilos', weight);
		newHistory = newHistory.replace('34°C', temperature);
	
	}

	story.textContent = newHistory;
	story.style.visibility = 'visible';
}	