document.addEventListener("DOMContentLoaded", hossz);
function hossz() {

    const szoveghossz_gomb = document.getElementById('szoveghossz');
    szoveghossz_gomb.addEventListener("click", () => {
        const szoveg = document.getElementById("szoveg").value;
        kimenet.innerHTML = "A szöveg hossza: " + szoveg.length;
    })
}

document.addEventListener("DOMContentLoaded", nev);
function nev() {
    const nevekGomb = document.getElementById('nevek');
    nevekGomb.addEventListener("click", () => {
        const csaladiNev = document.getElementById("csNev").value;
        const utoNev = document.getElementById("uNev").value;
        alert(csaladiNev.concat(" ", utoNev));


    });
}

document.addEventListener("DOMContentLoaded", vissza);
function vissza() {

    const visszafeleGomb = document.getElementById('visszafele');
    visszafeleGomb.addEventListener("click", () => {
        const szoveg = document.getElementById("forditando").value;
        forditott.innerHTML = "A szöveg visszafelé: " + visszafordit(szoveg);
        function visszafordit(szoveg) {
            var darabol = szoveg.split("");
            var forditott = darabol.reverse();
            var osszefuz = forditott.join("");
            return osszefuz;
        }
    })
}