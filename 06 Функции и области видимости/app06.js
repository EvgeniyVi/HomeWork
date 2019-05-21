//a
function a(){
alert(arguments[0]);
} // вызывает alert("Привет!")

//cube
function cube(a){
  return Math.pow(a, 3);
}
//avg2
function avg2(a,b){
  return ((a + b) / 2)
}//напишите функцию тут
avg2(1,2); 
avg2(10,5);


//sum3
function sum3(a,b,c){
  return(a||0) +(b||0)+ (c||0);
}

sum3(1,2,3) // => 6
sum3(5,10,100500) // => 100515
sum3(5,10) // => 15

//intRandom
function intRandom (a,b){
    var random = (!b)? Math.random()*a : Math.random()*(b-a)+a;
    return Math.round(random);
}
intRandom(2,15) // возвращает целое случайное число от 2 до 15 (включительно)
intRandom(-1,-1) // вернет -1
intRandom(0,1) // вернет 0 или 1
intRandom(10) // вернет 0 до 10 включительно

//greetAll
function greetAll(){
  var person = "";
    for( var key in arguments){
      person +=  arguments[key];
       
    }
      alert("Hello ,"  +  person); 
}
greetAll("Superman") // выводит alert "Hello Superman"
greetAll("Superman", " , SpiderMan") // выводит alert "Hello Superman, SpiderMan"
greetAll("Superman ", " , SpiderMan ", " , Captain Obvious") // выводит alert "Hello Superman, SpiderMan, Captain Obvious"
//sum
function sum(){
    var suma = 0;
    for (var i=0;i<arguments.length;i++){
        suma += arguments[i]
    }
    alert(suma);
}
sum(1) // => 1
sum(2) // => 2
sum(10,20,40,100) // => 170
//Union
function homework(hw) {
	var Task = prompt("Введите задание", '');
	switch(Task.toLowerCase()){
		case "a":aTask()
			break
		case "cube":cubeTask()
			break
		case "avg2":avg2Task()
			break
		case "sum3":sum3Task()
			break
		case "greetAll":greetAllask()
			break
		case "sum":sumTask()
			break
	}
}
//Union declarative
var homework={
	a:aTask(),
	cube: cubeTask(),
	avg2:avg2Task(),
	sum3:sum3Task(),
	greetAll:greetAllTask(),
	sum:sumTask()
} 
