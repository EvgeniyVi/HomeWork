assign: evaluation
var a = 5;
var b, c;
b = a * 5;
b = (c = (b / 2));
//
semicolon:error
var a = 1
var b = 2;
//
number age
var age = +prompt(`Сколько Вам лет?.`)
var date = new Date();
var old = date.getFullYear()-age;
var birthday = "Ваш год рожения:" + old;
alert(birthday);
//
Number: temperature
var temp = +prompt(`Укажите температуру в градусах Цельсия`,"0")
var far = (temp *9/5)+32;
var result = "Температура в Фаренгейтах:"+ far;
alert(far)
//
Number: divide
var element = +prompt(`Введите число`,"0")
var element2 = +prompt(`Введите число2`,"0")
var calc = element/element2;
alert(Math.floor(calc));
//
Number: odd
var p = (+prompt("Укажите число",''));
var num1 = parseInt(p);
if(num1 = parseInt(p)){
  alert("Вы ввели число");
}else{
  alert("Это не число");
}
if((num1%2) ==0){
  alert("Четное число");
}else{
  alert("Нечетное число")
}
//
String: greeting
var name = prompt('Как Вас зовут?','');
alert("Привет,"+ name +",рады тебя видеть!")
//
String: lexics
var text = prompt("Введите ваш текст", '');
if (text.indexOf("Плохое слово") == -1) {
    alert("Вы не употребялете плохих слов!Молодец");
} else {
    alert("Ну нельзя же так")
}
//
confirm//Boolean
if (confirm("Продолжить установку?")) {
  alert("Спасибо!")
} else {
  alert("Значит установим позже!")
}
//
Boolean: if
var ice = confirm("Вы любите мороженку?");
var like = confirm("А как насчет добавить сгущенки?");
if (ice && like) {
    alert("Правильный выбор,будет вкусный микс");
} else if (like) {
    alert(" Сладкоежка?")
}else if (ice) {
    alert("Без сгущенки тоже неплохо")
}else {
    alert("Жаль что вы не любите мороженку ")
}
//
Array: real
var cars = {
	Toyota
	Nissan
	Acura
}
//
Array: booleans
var icecream=[
  ice:confirm("Вы любите мороженку?");
  like:confirm("А как насчет добавить сгущенки?");
]
//
Array: plus
var plusmassiv = [46,5,78,36];
plusmassiv[2] = plusmassiv[0]+plusmassiv[1];
alert(plusmassiv[2])
//
Array: plus string
var str = ["Привет! ", "как  ", "у ", "тебя ", "искали ", "дела? " ,"родители ",  "обокрали "]
alert((str[0]+str[1]+str[2]+str[3]+str[5]))
alert((str[0]+str[3]+str[4]+str[6]))
alert((str[7]+str[3]+str[0]))
//
Object: real
var Toyota = {
    name: "Tundra",
  type: "SUV",
  Gearbox: "auto",
};
var meizum3Note={
  camera:"13mpx",
  memory:"16gb",
  ram:"2gb",
  batterycapacity:"4200mA",
};
var book = {
  page:"200",
  genre:"detective",
  interest:"very interest",
};

//
Object: change
Toyota.name = "Tundra this is a big car";
Toyota.Gearbox = "Mechanic";
Toyota.type = "Crossover";
var  myphone= meizum3Note;
myphone.camera = "5px";
var read = book;
console.log(Toyota,myphone,read)

//Comparison if
var age = +prompt("Сколько вам лет?", "");
if (age < 18 && age > 0) {
    alert("Школьник");
  } else {
      if (age < 30) {
          alert("Молодеж");
        } else {
          if (age < 45) {
              alert("Зрелость");
            } else {
              if (age < 60) {
                  alert("Закат");
              } else {
                  if (age < 90) {
                      alert("как пенсия?");
                  } else {
                      if (age < 0) {
                          alert("Думаю тут будет ноль");
                      } else {
                          alert("Так держать");
                      }
                    }
                  }
                }
              }
            }
//

//comparison:size
var hello = confirm("Желаете воспользоваться калькулятором размера одежды?");
if (hello) {
    var Russize = prompt("Укажите размер?", '');
    var Britansize = Russize - 32;
    alert("Ваш размер: " + Britansize);
} 
    var socks = confirm("Желаете перевести размер носков и чулков?");
    if (socks) {
        var socksRus = prompt("Размер носков?", '');
        var socksBritan = Math.floor(socksRus * 0.4);
        alert("Ваш размер носков " + socksBritan);
    } else {
        alert("Всего доброго!")
    }
//
ternary
var gender = confirm("Вы мужчина?") ? alert("Вы мужчина.") : alert("Вы женщина");
