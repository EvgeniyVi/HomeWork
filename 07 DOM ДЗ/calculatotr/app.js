  var button1 = document.createElement("Input");
        button1.setAttribute("type", "number","value", "");
        par1.appendChild(button1);

     var button2 = document.createElement("Input");
        button2.setAttribute("type","number","value", "");
        par2.appendChild(button2);

     var button3 = document.createElement("Input");
        button3.setAttribute("type", "number","value", "");
        par3.appendChild(button3);

    var button4 = document.createElement("Input");
        button4.setAttribute("type","readonly","value", "");
        par4.appendChild(button4);
                
    var button5 = document.createElement("Input");
        button5.setAttribute("type", "readonly","value", "");
        par5.appendChild(button5);
   
calc.onclick = function(){

    button5.value =(+button1.value)/100 * (+button2.value);
    button4.value = (+button3.value)*(+button5.value);
    
}