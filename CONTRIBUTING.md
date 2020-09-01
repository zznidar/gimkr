# Sodelovanje in posodabljanje repozitorija
Vsako šolsko leto se urniki spremenijo, zato je treba posodobiti podatke, ki se prikazujejo na nekaterih straneh. Za pridobivanje podatkov v pravi obliki so pripravljeni snippeti znotraj podmape `snippets` za posamezno storitev.

## Uporaba snippetov
Če ni drugače navedeno, se snippeti uporabljajo takole:
1. Kopiraš kodo snippeta
2. Odpreš spletno stran, od koder se pridobivajo podatki (navedena je na vrhu vsakega snippeta)
3. Odpreš DevTools (F12) -> Console (Konzola)
4. Prilepiš kodo, po potrebi popraviš/spremeniš nastavitve na začetku kode
5. Počakaš, da snippet opravi svoje delo
6. Kopiraš rezultat, ki se nazadnje izpiše v konzoli
7. Popraviš vrstico, ki potrebuje ta podatek (prilepiš)

## Storitve
### Prostost učilnic
Iz zgodovinskih razlogov se vsako leto kreira nova .js datoteka, ki vsebuje podatke:
1. Dupliciraš lanskoletno `Prostost_ucilnic_GimKr_2019-20.js` in popraviš ime na letošnje leto
2. V vrstici 2 navedeš datum zajema podatkov
3. V datoteki [index.html](https://github.com/zznidar/gimkr/blob/5b3465e3014fb11f0d69699c3e61d5a91f80fe0f/prostost/index.html#L54) popraviš script src na najnovejšo datoteko in v vrstici [50](https://github.com/zznidar/gimkr/blob/5b3465e3014fb11f0d69699c3e61d5a91f80fe0f/prostost/index.html#L50) navedeš, kdaj so bili zajeti podatki (ter po potrebi popraviš vir)

[Tedni.js](https://github.com/zznidar/gimkr/blob/master/prostost/snippets/Tedni.js) se uporabi vsakoletno, ko šola objavi razpored, kateri teden velja kateri urnik (štirje urniki). Odgovor snippeta se prilepi v vrstico 20 letošnje `Prostost_ucilnic_GimKr_????-??.js` datoteke in v vrstico 75 letošnje `Urniki_profesorjev_????-??` datoteke.

[Prostost-iz-eA.js](https://github.com/zznidar/gimkr/blob/master/prostost/snippets/Prostost-iz-eA.js) se uporabi vsakič, ko pride do spremembe urnika (v prvih mesecih je to lahko pogost pojav). Snippet se uporabi za vsak urnik posebej (torej štirikrat). Pred začetkom poiščemo teden z želenim urnikom, ki **nima nadomeščanj, dogodkov, praznikov** ali drugih posebnosti. Odgovor snippeta se prilepi v vrstico 10, 12, 14, 16 (glede na urnik) letošnje `Prostost_ucilnic_GimKr_????-??.js` datoteke. _Ne spreglej podpičja na koncu_.

Preostala snippeta sta zastarela. Uporabljala sta se, preden se je za urnike uporabljal eAsistent. [PrazniTabelo.js](https://github.com/zznidar/gimkr/blob/master/prostost/snippets/PrazniTabelo.js) se je uporabil enkrat za “kopiranje” dizajna razpredelnice urnikov. [Prostost.js](https://github.com/zznidar/gimkr/blob/master/prostost/snippets/Prostost.js) se je uporabljal za pridobivanje podatkov.

### Urniki profesorjev
Iz zgodovinskih razlogov se vsako leto kreira nova .js datoteka, ki vsebuje podatke:
1. Dupliciraš lanskoletno `Urniki_profesorjev_2019-20.js` in popraviš ime na letošnje leto
2. V vrstici 2 navedeš datum zajema podatkov
3. V datoteki [index.html](https://github.com/zznidar/gimkr/blob/5b3465e3014fb11f0d69699c3e61d5a91f80fe0f/urniki-prof/index.html#L81) popraviš script src na najnovejšo datoteko in v vrstici [71](https://github.com/zznidar/gimkr/blob/5b3465e3014fb11f0d69699c3e61d5a91f80fe0f/urniki-prof/index.html#L71) navedeš, kdaj so bili zajeti podatki (ter po potrebi popraviš vir)

[Urniki-profesorjev-iz-eA.js](https://github.com/zznidar/gimkr/blob/master/urniki-prof/snippets/Urniki-profesorjev-iz-eA.js) se uporabi vsakič, ko pride do spremembe urnika (v prvih mesecih je to lahko pogost pojav). Snippet se uporabi za vsak urnik posebej (torej štirikrat). Pred začetkom poiščemo teden z želenim urnikom, ki **nima nadomeščanj, dogodkov, praznikov** ali drugih posebnosti. Odgovor snippeta se prilepi v vrstico 10, 12, 14, 16 (glede na urnik) letošnje `Urniki_profesorjev_????-??.js` datoteke. _Ne spreglej morebitne vejice na koncu_.



