const osmosis = require('osmosis');
const fs = require('fs');
let savedData = [];

osmosis
	.get('https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B3%D0%BD%D0%B8%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D1%85_%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9')
	.find('#mw-content-text')
	.set({'biase': ['h2~ul>li']})
	// .data(console.log)
	// .data(function(data){

	// 	savedData.push(data);
	// })
	// .done(function(){
	// 	fs.writeFile('data.json', JSON.stringify(savedData, null, 4), function(err){
	// 		if(err){
	// 			console.error(err);
	// 		} else{
	// 			console.log('Data saved');
	// 		}
	// 	})
	// });


fs.readFile('./data.json', function(err, data){
	let jsonData = JSON.parse(data);

	var stringArray = jsonData[0].biase;

	// var thatString = stringArray.find(function(str) {
	// 	return str.search('классических экспериментов') !== -1;
	// });

	// 1. Удалить ненужные строки
	var useless = stringArray.indexOf('Список классических экспериментов в психологии');
	stringArray.splice(useless);


	// 2. Удалить ненужные символы

	// /\[.*\]/g
	var clearArray = stringArray.map(function(str){
		// var reg = /\[.*\]/g;
		var uselessSymbols = str.replace(/\[.*\]/g,'').trim()
		return uselessSymbols
	})

	console.log(clearArray[0]);

	// 3. Превратить массив строк в удобные объекты
	// var diseaseArray = stringArray.map(function(str){
	// 	var strArray = str.split('—')
	// 	if (strArray.length === 1) {
	// 		strArray = str.split(' - ')
	// 	} 
	// 	return {
	// 		name: strArray[0],
	// 		description: strArray[1],
	// 	}
	// });	
	// console.log(diseaseArray)
})

	// после div #toc
	// <p></p>
	// h2 ul ul
	// h2 p ul
	// h2 p ul ul 
	// h2 ul 
	// h2 ul см. также
/*это объект со значением массива
в массиве куча строк, разделенных запятыми
пройтись по массиву и из каждой строки создать отдельный массив
нужно из каждого массива удалить символы и фразы: "(англ.)русск.", "[]".
нужно взять каждый новый массив,выделить символ "—", все,что слева символа = будет ключом нового объекта,а то что справа - его значением.

для каждого массива
разделить содержимое на индексы массива
создать объект{
	название: искажение
}
*/