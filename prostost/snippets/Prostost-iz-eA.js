// Snippet za zajem prostih učilnic s spletne strani urnikov eAsistent
// Nazadnje posodobljeno: 2019-08-30
/* Avtor: Žan Žnidar */

const projekt = "https://www.easistent.com/urniki/56149a5b3eb5cbefdaf9c9ded39a80c8c31d8f33/ucilnice/652150"; // Main link, ki pelje do urnika sole -> ucilnice -> prva ucilnica, za trenutni teden/urnik
const izvzemi = ["kab-mm", "kd", "knj"]; // Izvzete učilnice


/* Note: ce zelimo gledati za kaksen teden naprej, na zacetek checka dodamo 
window.frames[0].ajax_urnik('naprej');
ampak moramo potem pocakati, da se nalaganje (NE onload iframa) konca. */


// Pripravimo tabelo   v obliki prostost[pon[1. ura,2,3,4,5,6,7,8,9,10],tor[1,...,10],...pet[...]]
prostost = [];
for (i = 0; i < 5; i++) {
    prostost[i] = [];
    for (j = 0; j < 10; j++) {
        prostost[i][j] = [];
    }
}

// Ustvarimo iFrame, znotraj katerega bomo pregledvali ucilnice (s tem se izognemo prenehanju izvajanja skripta ob osvezitvi/navigaciji/menjavi uclinice)
var ifrm = document.createElement('iframe');
ifrm.setAttribute('id', 'ifrm');
var el = document.getElementById("okvir_glavni");
el.parentNode.insertBefore(ifrm, el);

ifrm.setAttribute('onload', 'check()');
ifrm.setAttribute('src', projekt);




function check() {
	doc = document.getElementById("ifrm").contentWindow.document;
	a = doc.getElementById("id_parameter")



	trenutnaUclinica = doc.getElementById("id_parameter").selectedOptions[0].innerText;
	celice = doc.getElementsByClassName("ednevnik-seznam_ur_teden-td ");
	
	
	if(izvzemi.indexOf(trenutnaUclinica) === -1) { // Preskocimo, ce je ucilnica na seznamu izvzetih
		for(var i = 1; i < (6*10 -1); i++) { // 6 stolpcev = 5 dni + št. ure; 10 ur; -1 zaradi 0-based indexa
			if(celice[i].innerText === "") {
				console.log(i, i%6, i%6-1, Math.floor(i/6+1-1));
				prostost[i%6-1][Math.floor(i/6+1-1)].push(trenutnaUclinica); // prostost[dan][ura] 0-based
			}
		} 
	}
		
	if(a.selectedIndex < a.options.length-1) { // Obstajajo nepregledane ucilnice
		a.selectedIndex += 1;
		window.frames[0].spremeni_urnik();
	} else { // Prebili smo se skozi vse ucilnice
		console.log("Koncano!");
		console.log(prostost);
		console.log("Sortiram ...");
		
		for (i = 0; i < 5; i++) {
			for (j = 0; j < 10; j++) {
				prostost[i][j].sort(function(a, b){return a-b}); // Sortiramo po velikosti narascajoce, ker je na eA zmeden vrstni red
			}
		}
		console.log("Sortirano!");
		console.log(prostost);		
		
		console.log(JSON.stringify(prostost)); // Izpisemo lep rezultat
	}
	
}