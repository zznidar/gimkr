/* Avtor: Žan Žnidar */

{

const pr = "SLO"; // Predmet
const te = 3; // Število tednov za naprej
const blok = true; // true, če želimo, da se blok ura obnaša kot dve ločeni uri, torej da vsako uro vpraša enega
const nauro = 2; // Koliko dijakov vpraša na uro


mozniDatumi = [];
desno = document.getElementsByClassName("icon icon-arrow-open-right")[0];

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
                if (predmet == pr) {
                    console.log(predmet);
                    mozniDatumi.push(datum + "\t" + imedneva);
                }
            } catch (e) {}
        }
    }
}

function naprej() {
    if (t < te) {
        desno.click();
        t++;
        console.log("desno" + t);
    } else {
        clearInterval(casovnik);
        console.log("posisceno");
        console.log(mozniDatumi);

        if(!blok) {
            mozniDatumi = [...new Set(mozniDatumi)]; // Dedupliciramo blok ure
        }

        if(nauro > 1) {
            //console.log("nauro: ", nauro);
            for(var i = 0; i < mozniDatumi.length; i+= nauro) {
                //console.log("md.l in i: ", mozniDatumi.length, i);
                for(var j = 1; j < nauro; j++) {
                    mozniDatumi.splice(i, 0, mozniDatumi[i]);
                    //console.log("md.splicE: ", mozniDatumi);
                }
            }
        }

        md = "";

        for (var k = 0; k < mozniDatumi.length; k++) {
            md += mozniDatumi[k].split("\t")[0] + " 2019\t" + mozniDatumi[k].split("\t")[1] + "\n";
        }
        console.log(md);
    }
}


/*deduped = [...new Set(mozniDatumi)]; //Dedupliciramo blok ure*/
for(var i = 0; i< deduped.length;++i){ // Po dva na uro
    dupl.push(deduped[i]);
    dupl.push(deduped[i]);
 }



} // Celotno kodo ovijemo v {}, da gre za svoj scope, da browser ne izvrže SyntaxError: Identifier has already been declared ob ponovnem zagonu snippeta

/* KONEC KODE */