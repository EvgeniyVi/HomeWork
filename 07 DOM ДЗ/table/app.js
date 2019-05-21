var newtable = document.createElement("table");//создание таблицы
 
    for(let i =1;i<10;i++){

        let rows = document.createElement("tr");//cоздание строк
        newtable.appendChild(rows);//введение строк в таблицу
       
    for (let j=1;j<10;j++){

        let column = document.createElement("td") //создание колонок
        rows.appendChild(column);//введение колонок в строку
        column.style.border = "1px solid #000";//стиль для колонок
        column.style.padding = "20px";//стиль для колонок
        column.innerText = i*j;
    }
}
divtable.appendChild(newtable);//перенос таблицы в div 