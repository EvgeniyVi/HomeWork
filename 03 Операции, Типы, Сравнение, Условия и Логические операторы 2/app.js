//var homework = confirm("Мое домашнее задание,"")
switch(home){
switch: sizes
var size = prompt("Укажите размер верхней одежды","");
switch (size){
  case "40": alert("Ваш размер : 8");
                break;
    case "42": alert("Ваш размерв системе размеров Великобритании : 10");
                break;
    case "44": alert("Ваш размерв системе размеров Великобритании : 12");;
                break;
    case "46": alert("Ваш размерв системе размеров Великобритании : 14");;
                break;
      case "48": alert("Ваш размерв системе размеров Великобритании : 16");;
                break;
      case "50": alert("Ваш размерв системе размеров Великобритании : 18");;
                break;
      case "52": alert("Ваш размерв системе размеров Великобритании : 20");;
                break;
      case "54": alert("Ваш размерв системе размеров Великобритании : 22");;
                break;  
 
}
    var socks =prompt("Укажите размер носков",'');
switch (socks){
 case "21": alert("Ваш размер : 8");
                break;
    case "23": alert("Ваш размерв системе размеров Великобритании : 9");
                break;
    case "25": alert("Ваш размерв системе размеров Великобритании : 10");;
                break;
    case "27": alert("Ваш размерв системе размеров Великобритании : 11");;
                break;
   default: alert("Всего доброго");  
}
break;
//

case "switch: if"{
var color = prompt("Введите цвет","");
if(color == "red"){
     document.write("<div style='background-color: red;'>красный</div>");
 }
if(color == "black"){document.write("<div style='background-color: black; color: white;'>черный</div>");
}
if (color =="blue"){ document.write("<div style='background-color: blue;'>синий</div>");
}
if (color =="green"){document.write("<div style='background-color: green;'>зеленый</div>");
}
if(color !=="red" && color !== "black" && color !=="blue" &&  color !=="green")
{ document.write("<div style='background-color: gray;'>Я не понял</div>");
}
break;
//
case "prompt: or":
var interes= confirm("Хотите мы узнаем какого Вы года рождения?")|| alert ("Не сильно и хотелось знать,падумашь"); 
if(interes){
var age = +prompt("Сколько Вам лет?.",'')  ;
var date = new Date();
var old = date.getFullYear()-age;
var birthday = "Ваш год рожения:" + old;
alert(birthday);}                                              
//
case "confirm: or this days":
var robot= confirm("Шопинг?")|| alert ("Ты - бяка!"); 
if(robot){
  alert("Хороших покупок!")
}
break;
//
case "default: if":
var robot= confirm("Шопинг?")
if(robot){
  alert("Хороших покупок!")
}if(!robot){alert("Ты бяка!!")}
break;
//
case "triple prompt":
var surname = prompt("Укажите фамилию?","");
var name = prompt("Как Вас зовут?","");
var fathername = prompt("Укажите отчество?,","");
alert("Ваше полное имя: " + surname + " " + name + " " + fathername + ".");  
break;
//
case "default: or":
var surname = prompt("Укажите фамилию?","") || "Ivanov";
var name = prompt("Как Вас зовут?","") || "Ivan";
var fathername = prompt("Укажите отчество?,","") || "Ivanovich";
alert("Ваше полное имя: " + surname + " " + name + " " + fathername + ".");
break;
//
case "default: if":
var vopros = confirm("Укажите свои данные")
if(vopros){
var surname = prompt("Укажите фамилию?","") ;
var name = prompt("Как Вас зовут?","") ;
var fathername = prompt("Укажите отчество?,","") ;
  if (!surname)
  {surname = "Ivanov"
  }if (!name){
    name = "Ivan"
  }else if (!fathername){
    fathername = "Ivanovich"
  }
alert("Ваши ФИО: " + surname + " " + name + " " + fathername + ".");
}
break;
//
case "login and password":
var login = prompt("Введите логин",'')
if (login  !== 'admin'){

}else{
  var password = prompt("Введите пароль")
}
if(password !== 'qwerty'){
  alert("Неправильный пароль")
}else{
  alert("Поздравляем,все прошло успешно")
}
break;
//
case "currency calc":
var money = prompt("Укажите валюту которую желаете перевести USD или EUR", '');
switch(money){
  case "USD":  val =28.71;
    break;
  case "EUR": val =31.73;
     break;
  }

var buy = prompt("Какую сумму желаете перевести?",'');
var summa = buy*val;
alert("Ваша сумма "+ summa);
 break;
//
 
case "currency calc: improved":
var money = prompt("Укажите валюту которую желаете перевести" , 'usd or eur').toLowerCase();
switch(money){
  case "usd":  val =28.71;
    break;
  case "eur": val =31.73;
     break;
  }
var buy = prompt("Какую сумму желаете перевести?",'');
var summa = buy*val;
alert("Ваша сумма "+ summa);
 break;
//
case "currency calc: two rates":
var money = prompt("Укажите валюту которую желаете конвертировать" , 'usd or eur').toLowerCase();
 var conf = confirm("Хотите приобрести валюту??");
switch(money){
  case "usd":(conf)?  val = 29  : val =28.71;
    break;
  case "eur":(conf)?   val = 33 : val =31.73;
     break;
  }
var buy = prompt("Какую сумму желаете конвертировать?",'');
var summa = buy*val;
alert("Ваша сумма "+ summa);
 break;
//
case "currency calc: if"
var money = prompt("Укажите валюту которую хотите конвертировать","usd of eur").toLowerCase();
var conf = confirm("Желаете приобрести валюту?")
if(money == "usd"){
  val = (conf)? 29 : 28.71;
}else if (money == "eur"){
  val = (conf)? 33: 31.73;
}
var buy = prompt("Какую сумму желаете конвертировать?",'');
var summa = buy*val;
alert("Ваша сумма "+ summa);
 break;
//
case "scissors":
var player = prompt("Камень,ножницы бумага,раз,два три...(что ставишь ты?)",'камень,ножницы,бумага').toLowerCase();
var computer = Math.floor(Math.random()*2);
var game = ["камень" ,"ножницы","бумага"];
var comp = confirm("А я поставлю: " +game[computer]);
  if (player == "камень") {
            (game[computer] == "ножницы")? alert("Ты победил"): (game[computer] == "бумага")? alert("Я победил"): alert("ничья");
        } else if (player == "ножницы") {
            (game[computer]== "бумага")? alert("Ты победил"): (game[computer] == "камень")? alert("Я победил"): alert("ничья");
        } else if (player == "бумага") {
            (game[computer] == "камень")? alert("Ты победил"): (game[computer] == "ножницы")? alert("Я победил"): alert("ничья");
        } else {
            alert("Введи,иначе не поиграем");
        }
         break;
//
case "Задание на синий пояс":
var money = prompt("Укажите валюту которую хотите конвертировать","usd of eur").toLowerCase();
        var conf = confirm("Хотите купить валюту?");
        var change = conf? "buy" : "sale";
        var val = {
            usd: {buy:29, sale:28.71},
            eur: {buy:33, sale:31.73}
        }
        var buy = +prompt("укажите сумму?", "");
        var summa = (+val[money][change] * buy);
        alert("Ваша сумма: " + summa);
        //
  break;
