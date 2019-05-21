
var  distance= +prompt("Расстояие(км):",30);
var  gas= +prompt("Средний расход топлива л/ 100км:", 9);
var price= +prompt("Цена топлива:",30);

var fuelVolume = distance/100*gas;
var pricetravel = price*fuelVolume;
alert(`Cтоимость поездки: ${pricetravel}грн \nНеобходимое количество топлива: ${fuelVolume}л`);


document.getElementById("forma").addEventListener("submit", function (e) {
    e.preventDefault();
    var credentials = {
        login: 'admin',
        password: 'qwerty',
    };

    if (credentials.login == document.getElementById("login").value
        && credentials.password == document.getElementById("password").value
    ) {
        document.getElementsByClassName("Result")[0].style.display = "block";
        document.getElementsByClassName("noneResult")[0].style.display = "none";
    } else {
        document.getElementsByClassName("noneResult")[0].style.display = "block";
        document.getElementsByClassName("Result")[0].style.display = "none";
    }
});