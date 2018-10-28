// Snippet za zajem prostih učilnic s spletne strani urnikov Gimnazije Kranj
// Nazadnje posodobljeno: 2018-10-28
/* Avtor: Žan Žnidar */

const projekt = "http://projekti.gimkr.si/urnik4_18_19/"; // Main link, ki je podlaga za relativne linke
const izvzemi = ["hod", "kd", "knj", "jed", "bazen"]; // Izvzete učilnice

ucilnice = document.getElementsByClassName("tdx")[5].getElementsByTagName("a");

var ifrm = document.createElement('iframe');
ifrm.setAttribute('id', 'ifrm');
var el = document.getElementsByClassName("tdx")[0];
el.parentNode.insertBefore(ifrm, el);

ifrm.setAttribute('src', 'http://example.com');


// Pripravimo tabelo
prostost = [];
for (i = 0; i < 5; i++) {
    prostost[i] = [];
    for (j = 0; j < 10; j++) {
        prostost[i][j] = [];
    }
}

i = 0;

naprej();

var casovnik = setInterval(function() {
    check();
    naprej();
}, 1000);

function check() {
    try {
        doc = document.getElementById("ifrm").contentWindow.document;

        // Dodamo vrstice, da bo povsod do 10. ure
        for(var i = 0; i < (11 - doc.getElementsByTagName("tbody")[0].children.length); i) {
            doc.getElementsByTagName("tbody")[0].insertAdjacentHTML("beforeend", "<tr><td>"+ (10-i) +". ura</td><td></td><td></td><td></td><td></td><td></td></tr>");
        }
        
        vrste = doc.getElementsByTagName("table")[0].getElementsByTagName("tr");
        for (v = 1; v < vrste.length; v++) {
            stolpci = vrste[v].getElementsByTagName("td");
            for (s = 0; s < stolpci.length; s++) {
                if (stolpci[s].innerText.trim() == "") {
                    console.log(vrste[0].getElementsByTagName("td")[s].innerText.trim() + ", " + v + ". ura");
                    // Učilnica je prosta

                    if(izvzemi.indexOf(vrste[0].getElementsByTagName("td")[0].innerText.trim()) === -1) { // Izvzamemo izvzete učilnice
                        prostost[s - 1][v - 1].push(vrste[0].getElementsByTagName("td")[0].innerText.trim());
                    }
                }
            }
        }
        prostost;

    } catch (e) {console.error(e);}
}

function naprej() {
    if (i < ucilnice.length) {
        console.log(projekt + ucilnice[i].getAttribute("href") + "; i = " + i);
        ifrm.setAttribute("src", projekt + ucilnice[i].getAttribute("href"));
        i++;
    } else {
        clearInterval(casovnik);
        console.log("posisceno");
        console.log(JSON.stringify(prostost));
    }
}
