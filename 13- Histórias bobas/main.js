//Constantes para jogar os valores no HTML
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//Função para sortear os textos de modificação
function randomValueFromArray(array){
	const random = Math.floor(Math.random()*array.length);
	return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
	
	var newHistory = storyText;
	var xItem = randomValueFromArray(insertX);
	var yItem = randomValueFromArray(insertY);
	var zItem = randomValueFromArray(insertZ);
	
	newHistory = newHistory.replace(':insertx', xItem);
	newHistory = newHistory.replace(':insertx', xItem);
	newHistory = newHistory.replace(':inserty', yItem);
	newHistory = newHistory.replace(':insertz', zItem);
	
	if(customName.value !== '') {
		let name = customName.value;
		newHistory = newHistory.replace('Bob', name);
	}

	if(document.getElementById("uk").checked) {
		let weight = Math.round(300/14) + " stone";
		let temperature =  Math.round((94-32) * (5/9)) + " centigrade";
		newHistory = newHistory.replace('300 pounds', weight);
		newHistory = newHistory.replace('94 fahrenheit', temperature);
	
	}

	story.textContent = newHistory;
	story.style.visibility = 'visible';
}	