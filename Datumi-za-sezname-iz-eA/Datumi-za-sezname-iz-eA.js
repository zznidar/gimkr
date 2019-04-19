/* Avtor: Žan Žnidar */

{

const PR = "SLO"; // Predmet
const TE = 3; // Število tednov za naprej
const BLOK = false; // true, če želimo, da se blok ura obnaša kot dve ločeni uri, torej da vsako uro vpraša enega
const NAURO = 2; // Koliko dijakov vpraša na uro


mozniDatumi = [];
desno = document.getElementsByClassName("icon icon-arrow-open-right")[0];

solskoLeto = [];
danes = new Date;
if(danes.getMonth() > 6) {
	solskoLeto.push(danes.getFullYear()+"", danes.getFullYear()+1+"");
} else {
    solskoLeto.push(danes.getFullYear()-1+"", danes.getFullYear()+"");
}

t = 0;

var casovnik = setInterval(function() {
    check();
    naprej();
}, 1000);


function check() {
    dan = document.getElementsByClassName("flex-row")[0];
    for (var d = 1; d < dan.children.length; d++) {
        datum = dan.children[d].getElementsByClassName("color-default-light font-12")[0].innerText;
        imedneva = dan.children[d].getElementsByClassName("hidden-xs")[0].firstElementChild.innerText;
        console.log(datum, "\t", imedneva);

        vrsta = document.getElementsByClassName("flex-row");
        for (var v = 1; v < vrsta.length; v++) {
            try {
                predmet = vrsta[v].getElementsByClassName("flex-cell")[d].firstElementChild.firstElementChild.firstElementChild.lastElementChild.innerText;
                if (predmet == PR) {
                    console.log(predmet);
                    mozniDatumi.push(datum + "\t" + imedneva);
                }
            } catch (e) {}
        }
    }
}

function naprej() {
    if (t < TE) {
        desno.click();
        t++;
        console.log("desno" + t);
    } else {
        clearInterval(casovnik);
        console.log("posisceno");
        console.log(mozniDatumi);

        if(!BLOK) {
            mozniDatumi = [...new Set(mozniDatumi)]; // Dedupliciramo blok ure
        }

        if(NAURO > 1) {
            //console.log("nauro: ", NAURO);
            for(var i = 0; i < mozniDatumi.length; i+= NAURO) {
                //console.log("md.l in i: ", mozniDatumi.length, i);
                for(var j = 1; j < NAURO; j++) {
                    mozniDatumi.splice(i, 0, mozniDatumi[i]);
                    //console.log("md.splicE: ", mozniDatumi);
                }
            }
        }

        md = "";

        for (var k = 0; k < mozniDatumi.length; k++) {
            md += mozniDatumi[k].split("\t")[0] + " "+(mozniDatumi[k].split("\t")[0].split(". ")[1].split(".")[0] > 6 ? solskoLeto[0] : solskoLeto[1])+"\t" + mozniDatumi[k].split("\t")[1] + "\n";
        }
        console.log("\n\n*** Najbolje se kopira iz brskalnika Google Chrome v razpredelnice Google Sheets. ***\n");
        console.log("\n\n*** SEZNAM ZA KOPIRANJE: ***\n\n");
        console.log(md);
    }
}

} // Celotno kodo ovijemo v {}, da gre za svoj scope, da browser ne izvrže SyntaxError: Identifier has already been declared ob ponovnem zagonu snippeta

/* KONEC KODE */