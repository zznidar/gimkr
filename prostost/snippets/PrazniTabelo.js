// Izprazni tabelo pri prikazu urnika, da lahko html kopiramo in uporabimo na svoji strani za prostost.
// Nazadnje posodobljeno: 2018-02-16
/* Avtor: Žan Žnidar */

vrste = document.getElementsByTagName("table")[0].getElementsByTagName("tr");
for (v = 1; v < vrste.length; v++) {
    stolpci = vrste[v].getElementsByTagName("td");
    for (s = 1; s < stolpci.length; s++) {
        stolpci[s].innerText = "";
    }
}
