var body1 = {
    tagName: 'body',
    children:[
        {
            tagName: 'div',
            children:[
                {
                    tegName: 'span',
                    children: [""Enter a data please:""],

                },
                {
                    tegName: 'input',
                    children: [""],
                    attrs: {
                        type:"text",
                        id:"name"
                    }
                },
                {
                    tegName: 'input',
                    children: [""],
                    attrs: {
                        type:"text",
                        id:"surname"
                    }
                }
            ],
            paired: true,
        },
        {
            tagName: 'div',
            children:[
                {
                    tegName: 'button',
                    children: [""],
                    attrs: {
                        id:"ok"
                    }
                },
                {
                    tegName: 'button',
                    children: [""],
                    attrs: {
                        id:"cancel"
                    }
                }
            ],
            paired: true,
        }
        ],
    paired: true,
     }

//
html tree
alert(body1.children[1].children[1].attrs.id)//button 2
alert(body1.children[0].children[2].attrs.id)// input
//
declarative fields
var notebook = {
    brand : prompt("Укажите бренд  ноутбука",'HP'),
    type:  +prompt ("Укажите cерию", '440 G4'),
    model: prompt ("Укажите модель", 'Y7Z75EA'),
    ram: +prompt ("Оперативная память GB", '4'),
    size: +prompt ("Укажите диагональ экрана", '14'),
    weight: +prompt ("Укажите вес", '1.8'),
    resolution: {
        width: parseInt(prompt("Разрешение экрана",'1920')) ,
        height: parseInt(prompt("Разрешение экрана",'1080')),
    },
  };

var phone = {
    brand: prompt("Укажите бренд  телефона",'meizu'),
    model: prompt("Укажите модель  телефона",'m2'),
    ram: +prompt("Оперативная память GB", '2'),
    color: prompt("Цвет", 'black'),
};

var person = {
    name:prompt("Укажите Ваше имя", 'Donald'),
    surname: prompt("Ваша фамилия?", 'Trump'),
    family:confirm("У вас есть семья?");
}
//
object links
person.smartfone = phone;
person.laptop = notebook;
notebook.owner = person;
phone.owner = person;
person.smartphone.owner.laptop.owner.smartphone == person.smartphone
true
//
imperative array fill 3
var arr = []
arr[0] = prompt("Как Вас зовут?",'');
arr[1] = prompt("Какой у Вас автомобиль?",'');
arr[2] = prompt("Какой Ваш любимый цвет?",'');
//
while confirm
 while (!confirm("Нажмите отмену для бесконечного цикла"));//не знаю насколько правильно,так как если добавить do{},тоже работает
//
array fill
var arr = [];
do {
  var newobject = arr.push ('');
    newobject = prompt("Ведите значение", 'Hello');
} while (newobject);

//
infinite probability
var i = 0;

while(true) {
    if(Math.random() > 0.9) {
    alert(++i);
    break;
}
else i++;
}
//
empty loop
while (true){
    var cancel = prompt();
    if (cancel!== null)
    {break;}
}
//
progression sum
for (var i=1;i < 100;i =i+3){
    alert(i);
}
//
chess one line
for (var j=1, str=""; j<14;j++){
     if (j % 2 != 0){ str+=".";}
      else if(str+="#");
}
alert(str);
//
numbers
for (var str = "", i=0;i<10; i++){
  for (h=0;h<10;h++){
    str += h;
    if (h==9) {
      str +="\n";
    }
  }
}
alert(str);
//
chess
for (var i=1 ,str="";i<10;i++){
    for (let h=1;h<=6 ;h++){
        str +=".";
        str +="#";
            if(h==6){
                str +="\n";
                i++;}
   
    for (let h=1;h<=6 &&i % 2 == 0;h++){
        str +="#";
        str +=".";
        if(h==6){
                str +="\n";
                }   
}
}
   }
document.write(str);
//
cubes
var arr =[];
for(var i = 0;i<100;i++)
    arr[i]=Math.pow(i, 3);
alert(arr);
//
multiply table
var arr = [];
for (var i = 1; i <= 100; i++) {
    arr[i] = [];
    for (var j = 1; j <= 100; j++)
        arr[i][j] = i * j;
}
document.write(arr);
alert(arr);
//
Задание на синий пояс: Треугольник
var i = 0, j = 0;
var max = 5;
var space = "",
    star = "";

while (i < max) {
    space = "";
    star = "";
    for (j = 1; j < max - i; j+=1) space += ".";
    for (j = 0; j < 2 * i + 1; j++) star += "#";
    console.log(space + star + space);
    i++;
}