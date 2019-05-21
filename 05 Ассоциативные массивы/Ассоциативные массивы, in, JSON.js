//3 persons
var a={
  name: "Yevheniy",
  surname: "Vinnikov",
}
var b = {
  name: "Ivan",
  surname: "Stec",
}
var c = {
  name: "Nikolay",
  surname: "Ivanov",
}
//different fields
var a={
  name: "Yevheniy",
  surname: "Vinnikov",
  age: "21",
}
var b = {
  name: "Ivan",
  surname: "Stec",
  sex: "man"
}
var c = {
  name: "Nikolay",
  surname: "Ivanov",
  numberphone : "3800000004"
}
//fields check
var a={
  name: "Yevheniy",
  surname: "Vinnikov",
  age: 21,
}
var b = {
  name: "Ivan",
  surname: "Stec",
  sex: "man"
}
var c = {
  name: "Nikolay",
  surname: "Ivanov",
  numberphone : "3800000004"
}
alert("age" in a);
alert(typeof (a.age));
alert("age" in b);
alert(typeof (c.age));;

Или так?(

var a={
  name: "Yevheniy",
  surname: "Vinnikov",
  age: 21,
}
var b = {
  name: "Ivan",
  surname: "Stec",
  sex: "man"
}
var c = {
  name: "Nikolay",
  surname: "Ivanov",
  numberphone : "3800000004"
}
if ("age" in a) {
  alert( "Свойство age существует!" );
}else{
  alert("В этом массиве такого свойства нет")
}
)???????
//array of persons
var persons = [
  a = {
  name: "Yevheniy",
  surname: "Vinnikov",
  age: 21,
},
  b = {
  name: "Ivan",
  surname: "Stec",
  fathername:"Nikolayevich",
  sex: "man"

},
   c = {
  name: "Nikolay",
  surname: "Ivanov",
  numberphone : "3800000004"
},
 ({name:'Igor',surname:'Strek',education:'height'})
]
//loop of persons
for (i = 0; i < persons.length; i++)
console.log(persons[i]);

//loop of fields loop of persons
for (var persons ){ 
    var name = ''; 
    var surname = ''; 
 
    for (var key in person) { 
        if (key === 'name') name = person[key]; 
        else if (key === 'surname') surname = person[key]; 
       
    } 
 
    console.log(`Person: ${name} ${surname}`); 
}
//loop of loop or case
for (var i = 0;i<persons.length;i++){
  var keys = Object.keys(persons[i]);
  for (var h = 0;h<keys.length;h++){
    if(keys[h] == "name" || keys[h] == "surname" ){
    console.log( keys[h]+ "-" + persons[i]  [keys[h]]);
}
}
}
//loop of loop with optional fields

for (var i = 0;i<persons.length;i++){
  var keys = Object.keys(persons[i])
  for (var h = 0;h<keys.length;h++){
     if(keys[h] !=="name"|| keys[h] !== "surname"){
      console.log(keys[h] + "-" + persons[i] [keys[h]] );
    }
  }
}
//fullName
for (var i = 0; i < persons.length; i++) {
   
	persons[i].fullName = persons[i].name + "." +(persons[i].fathername? persons[i].fathername:".") + "." + persons[i].surname;
console.log(persons[i].fullName);
}
//serialize
({"name":"Yevheniy","surname":"Vinnikov","age":21,"fullName":"Yevheniy...Vinnikov"},{"name":"Ivan","surname":"Stec","fathername":"Nikolayevich","sex":"man","fullName":"Ivan.Nikolayevich.Stec"},{"name":"Nikolay","surname":"Ivanov","numberphone":"3800000004","fullName":"Nikolay...Ivanov"},{"name":"Igor","surname":"Strek","education":"height","fullName":"Igor...Strek"});
//deserialize
var json=({"name":"Yevheniy","surname":"Vinnikov","age":21,"fullName":"Yevheniy...Vinnikov"})
var add = person.push("json");
//HTML
var border = "style='border:1px solid black'";
var str = `<table var border >`;
for (var i = 0; i < persons.length; i++) {
	str += `<tr var border>`; 
	for (var key in persons[i]){
		if (key == "name" || key == "surname") {
    	str += `<th var border>` + key + `</th><td var border>` + persons[i][key] + "</td>";
    	}
	}
	 
}

document.write(str);

//HTML optional fields
var border = "style='border:1px solid black'";
var strok = `<table ${border} `;
for (var i = 0; i < persons.length; i++) {
		strok += `<tr ${border}>`;
	for (var key in persons[i]){
    	strok += `<th ${border}>` + key + `</th><td ${border}>` + persons[i][key] + "</td>";
	}
		strok += `</tr>`; 
}
strok += "</table>";
document.write(strok);

//HTML tr color
var border = "style='border:1px solid black'";
var tr2= "style ='border:1px solid black;background-color:red;' "
var str = `<table ${border} `;
for (var i = 0; i < persons.length; i++) {
	if (i%2) {
		str += `<tr ${tr2}>`;
	} else {
		str += `<tr ${border}>`; 
	}
	for (var key in persons[i]){
    	str += `<th ${border}>` + key + `</th><td ${border}>` + persons[i][key] + "</td>";
	}
		str += `</tr>`; 
}
str += "</table>";
document.write(str);

//HTML th optional
var border = "style='border:1px solid black'";
var tr2 = "style='border:1px solid black; background-color:red'";
var str = `<table ${border} ><tr>`;
for (var i = 0; i < persons.length; i++) {
	for (var key in persons[i]){
		str += `<th ${tr2}>${key}</th>`
	}
}
str += `</tr><tr>`;
for (var i = 0; i < persons.length; i++) {
	for (var key in persons[i]){
		str += `<td ${border}>${persons[i][key]}</td>`
	}
}
str += `</tr></table>`;
document.write(str);

//weather forecast
fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kharkiv%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
    .then(response => response.json())
    .then(data => { 
            weatherData = data
      let forecast = data.query.results.channel.item.forecast
      for (var i=0;i<forecast.length;i++)
    console.log(forecast[i])
  })