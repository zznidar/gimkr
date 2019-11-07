// Snippet za zajem urnikov profesorjev s spletne strani urnikov eAsistent
// Nazadnje posodobljeno: 2019-11-07
/* Avtor: Žan Žnidar */

const projekt = "https://www.easistent.com/urniki/56149a5b3eb5cbefdaf9c9ded39a80c8c31d8f33/ucilnice/652150"; // Main link, ki pelje do urnika sole -> ucilnice -> prva ucilnica, za trenutni teden/urnik
const izvzemi = []; // Izvzete učilnice


/* Note: ce zelimo gledati za kaksen teden naprej, na zacetek checka dodamo 
window.frames[0].ajax_urnik('naprej');
ampak moramo potem pocakati, da se nalaganje (NE onload iframa) konca. */


o = {}; // Objekt s profesorji   v obliki {"Ime Priimek": [pon[1...10],tor[1...10]...], "Ime2 Priimek2": [...]}   , zapisane so ucilnice
o[""] = []; // Dodamo se praznega profesorja, da ni errorja, dokler ni izbran noben profesor pri prikazu
console.log("Dodan prazen profesor.");


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
		
		for(var i = 1; i < (6*10); i++) { // 6 stolpcev = 5 dni + št. ure; 10 ur;
	
			if(celice[i].getElementsByClassName("text11").length !== 0) { // Ce je ura polna/zasedena ;; Predpostavimo, da v urniku ni napak (da bi bilo vec profesorjev hkrati v isti uclinici)
				
				var hkrativeniuri = []; // Array, kjer preverimo, da nima vec prof. hkrati v isti ucilnici
				for (duple = 0; duple < celice[i].querySelectorAll(".text11:not(.gray)").length; duple++) {
					hkrativeniuri.push(celice[i].querySelectorAll(".text11:not(.gray)")[duple].innerText.trim());
				}
				var hkrativeniuridedupl = [...new Set([...hkrativeniuri])];
				if (hkrativeniuridedupl.length > 1) {
					console.warn(hkrativeniuri, i, trenutnaUclinica); 
				}
				
				for(var p = 0; p < hkrativeniuridedupl.length; p++) { 
						
					trenutniProfesor = hkrativeniuridedupl[p];
					trenutniRazred = celice[i].getElementsByClassName("text14 bold")[p].innerText; // Predpostavimo, da ce ze je napaka (vec profesorjev hkrati v isti ucilnici), se to ne zgodi, kadar so jeziki.
					console.log(i, i%6, i%6-1, Math.floor(i/6+1-1)), trenutniProfesor, trenutniRazred;
				
					if(o[trenutniProfesor] === undefined) {
						o[trenutniProfesor] = [[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]; // Profesor se ne obstaja, ustvarimo array zanj
					}
					
					o[trenutniProfesor][i%6-1][Math.floor(i/6+1-1)].push(trenutnaUclinica + " (" + trenutniRazred + ")"); // profesor[dan][ura] 0-based   /// 18 (1.A)   * Opomba: pozvizgamo se na pravopisne popravke in zaradi preglednosti pustimo izvoren zapis razreda.
				
				}
				
			}
		} 
		
	}
		
	if(a.selectedIndex < a.options.length-1) { // Obstajajo nepregledane ucilnice
		a.selectedIndex += 1;
		window.frames[0].spremeni_urnik();
	} else { // Prebili smo se skozi vse ucilnice
		console.log("Koncano!");	
		console.log(o);
		console.log("Nic ne sortiramo ... :(");
		
		console.log("Nic ni sortirano.");		
		
		console.log(JSON.stringify(o)); // Izpisemo lep rezultat
	}
	
}