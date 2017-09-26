const osmosis = require('osmosis');
const fs = require('fs');
let savedData = [];

osmosis
	.get('https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B3%D0%BD%D0%B8%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D1%85_%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9')
	.find('#mw-content-text')
	.set({'biase': ['h2~ul>li']})
	// .data(function(data){
	// 	savedData.push(data);
	// })
	// .done(function(){
		// fs.writeFile('data.json', JSON.stringify(savedData, null, 4), function(err){
		// 		if(err){
		// 			console.error(err);
		// 		} else{
		// 			console.log('Data saved');
		// 		}
		// })
	// });

// 1. Удалить ненужные строки
var deleteText = function (sArr){
	var useless = sArr.indexOf('Список классических экспериментов в психологии');
	sArr.splice(useless);
	return sArr
};
// 2. Удалить ненужные символы
var deleteSymbols = function(sArr){
	var clearArray = sArr.map(function(str){
		var reg = /\[.*\]/g;
		// var reg2 = /\(.*\).*\./g;
		var clearBiase = str.replace(reg,'').replace('(англ.)русск.','').trim();
		return clearBiase
	});
	return clearArray
};
// 3. Превратить массив строк в удобные объекты
var makeObjects = function (sArr){
		var diseaseArray = sArr.map(function(str){
			var strArray = str.split(/—(.+)/)
			if (strArray.length === 1) {
				// console.log(strArray);
				strArray = str.split(/ - (.+)/)
				// console.log(strArray);
			}
			return {
				name: strArray[0].trim(),
				description: strArray[1].trim(),
			}
			// return diseaseArray
		});	
	return diseaseArray
};
//работа с готовым json'ом
fs.readFile('./data.json', function(err, data){
	let jsonData = JSON.parse(data);
	var stringArray = jsonData[0].biase;
	var arrWithDeletedText = deleteText(stringArray);
	var arrWithDeletedSymbols = deleteSymbols(arrWithDeletedText);
	var biaseObjectsArr = makeObjects(arrWithDeletedSymbols);
	// console.log(biaseObjectsArr[12]);
	fs.writeFile('../public/js/readyArray.json', JSON.stringify(biaseObjectsArr, null, 4), function(err){
		if(err){
			console.error(err);
		} else{
			console.log('Data saved');
		}
	});
	// var yourBiase = Math.floor(Math.random() * diseaseArr.length);
	// console.log(biaseObjectsArr[yourBiase]);
});
// var yourBiase = Math.floor(Math.random() * biaseObjectsArr.length);

/*
есть массив с объектами
написать функцию,которая будет выбирать рандомный объект
и подставлять его имя и описание в разметку
*/
