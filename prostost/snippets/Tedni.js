// Parsanje tednov za urnike iz http://www.gimkr.si/urniki
// Nazadnje posodobljeno: 2018-02-16
/* Avtor: Žan Žnidar */

tedni = [];
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

for (var u = 2; u <= 8; u += 2) {

    tabela = document.getElementsByClassName("tableBorder")[0];
    polja = tabela.getElementsByTagName("td");
    datumi = polja[u].innerText.split("\n");
    // 2, 4, 6, 8

    tedni1 = [];
    for (var i = 0; i < datumi.length; i++) {
        tedni1.push(datumi[i].split(" - "));

        for (var j = 0; j <= 1; j++) {
            // Številke mesecev zamenjamo za imena mesecev, da jih lahko poparsamo; za končne dodamo minuto pred polnočjo, da se šteje tudi današnji dan; nato jih poparsamo
            tedni1[i][j] = Date.parse(tedni1[i][j].split(". ")[0] + ". " + months[tedni1[i][j].split(". ")[1] - 1] + " " + tedni1[i][j].split(". ")[2] + (j == 1 ? " 23:59" : ""));
        }
    }

    console.log(JSON.stringify(tedni1));
    tedni.push(tedni1);
}
console.log("Array z vsemi tedni:");
console.log("var tedni = " + JSON.stringify(tedni));