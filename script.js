const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('keyup', searchHandler);

function searchHandler(e) {
	suggestions.innerHTML = '';
	if (input.value !== '') {
		const inputValue = input.value.toLowerCase();
		search(inputValue);
	}
}

function showSuggestions(results, inputVal) {
	return results.filter(value => value.toLowerCase().includes(inputVal))
}

function search(str) {
	let results = showSuggestions(fruit, str);
	let limitResult = results.slice(0, 5);
	for (let result of limitResult) {
		const li = document.createElement('li');
		li.innerHTML = result;
		suggestions.append(li);
	}
}

suggestions.addEventListener('click', useSuggestion);

function useSuggestion(e) {
	suggestions.innerHTML = '';
	input.value = e.target.innerText;
	const inputValue = input.value.toLowerCase();
	search(inputValue);
}




// Step Eight
// Write a function which highlights the suggestion. Attach this function to the event listener.

// suggestions.addEventListener('mouseover', highLight);

// function highLight(e) {
// 	e.target.style.background = 'lightgray';
// }

// suggestions.addEventListener('mouseout', notHighLight);

// function notHighLight(e) {
// 	e.target.style.background = '';
// }