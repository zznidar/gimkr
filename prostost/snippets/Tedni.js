// Parsanje tednov za urnike iz https://www.gimkr.si/dijaki/urniki-in-nadomescanja/
// Nazadnje posodobljeno: 2020-09-06
/* Avtor: Žan Žnidar */

tedni = [];
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


tabela = document.getElementsByClassName("table-wrapper")[0];
vrste = tabela.getElementsByTagName("tr");

for (var v = 1; v < vrste.length; v++) { // 0. vrsta je header
	vrsta = vrste[v];
	polje = vrsta.getElementsByTagName("td")[0];
	datumi = polje.innerText.split("\n");
	tedni1 = [];
	for (var i = 0; i < datumi.length; i++) {
		tedni1.push(datumi[i].split("–"));

		for (var j = 0; j <= 1; j++) {
			dd = tedni1[i][j].split(".")[0].trim().padStart(2, "0");
			mm = tedni1[i][j].split(".")[1].trim().padStart(2, "0");
			yyyy = tedni1[i][j].split(".")[2].trim();
			casus = (j == 1 ? "23:59:59" : "00:00:00"); // za končne dodamo minuto pred polnočjo, da se šteje tudi današnji dan, nato jih poparsamo
			//console.warn(`${yyyy}-${mm}-${dd}T${casus}`)
			tedni1[i][j] = Date.parse(`${yyyy}-${mm}-${dd}T${casus}`);
		}
	}

	console.log(JSON.stringify(tedni1));
	tedni.push(tedni1);
}
console.log("Array z vsemi tedni:");
console.log("var tedni = " + JSON.stringify(tedni));
