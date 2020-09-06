﻿// Urniki profesorjev GimKr
// Podatki zajeti 2020-09-01
// Nazadnje posodobljeno 2019-12-03
/* Avtor: Žan Žnidar */

profesorji = document.getElementById("profesorji");
imena = document.getElementById("imena"); // Datalist za autocomplete

var o = [
			{"":[],"R. Rudež":[[["1 (3.H)"],["46 (2.D)"],["2 (1.G)"],[],[],[],[],[],[],[]],[["45 (1.E)"],[],["kd (3.B)"],[],[],[],[],[],[],[]],[["1 (3.H)"],["1 (3.H)"],["46 (2.D)"],[],[],[],[],[],[],[]],[["kd (3.B)"],["9 (2.E)"],["45 (1.E)"],[],[],[],[],[],[],[]],[["1 (3.H)"],["1 (3.H)"],[],["9 (2.E)"],["2 (1.G)"],["2 (1.G)"],[],[],[],[]]],"L. Dolinar":[[[],[],[],[],[],[],["1 (3.H)"],["1 (3.H)"],["21 (4.H)"],["21 (4.H)"]],[["21 (4.H)"],["21 (4.H)"],[],[],[],[],["1 (3.H)"],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[["1 (3.H)"],["1 (3.H)"],[],[],[],[],[],[],[],[]],[[],[],[],[],[],["21 (4.H)"],["21 (4.H)"],[],[],[]]],"B. Kodek":[[[],["1 (3.H)"],[],[],[],["14 (4.F)"],["21 (4.H)"],["21 (4.H)"],[],[]],[[],["14 (4.F)"],["14 (4.F)"],[],[],["1 (3.H)"],[],[],[],[]],[[],[],[],[],[],["1 (3.H)"],["21 (4.H)"],[],[],[]],[[],[],["27 (3.A)"],[],["21 (4.H)"],["21 (4.H)"],["1 (3.H)"],[],[],[]],[[],["27 (3.A)"],["27 (3.A)"],["14 (4.F)"],["21 (4.H)"],[],["1 (3.H)"],[],[],[]]],"M. Bukovšek":[[["21 (4.H)"],["21 (4.H)"],[],["1 (3.H)"],["1 (3.H)"],[],["30 (3.C)"],["30 (3.C)"],[],[]],[[],["1 (3.H)"],["5 (1.C)"],["21 (4.H)"],[],[],[],[],[],[]],[[],[],[],["30 (3.C)"],[],[],[],[],[],[]],[["5 (1.C)"],["5 (1.C)"],[],[],[],["30 (3.C)"],["49 (3.G)"],["49 (3.G)"],[],[]],[[],[],["21 (4.H)"],["21 (4.H)"],["1 (3.H)"],["1 (3.H)"],["49 (3.G)"],[],[],[]]],"P. Košir":[[[],["49 (3.G)"],["1 (3.H)"],["28 (3.B)"],["28 (3.B)"],[],[],[],[],[]],[[],[],[],[],[],[],["kd (3.B)"],["1 (3.H)"],["1 (3.H)"],[]],[[],[],[],["kd (3.B)"],["21 (4.H)"],["21 (4.H)"],["49 (3.G)"],[],[],[]],[["6 (4.H)"],["6 (4.H)"],[],[],["1 (3.H)"],["1 (3.H)"],[],[],[],[]],[["21 (4.H)"],["21 (4.H)"],[],[],[],[],[],[],[],[]]],"M. Šorli":[[["44 (2.Č)"],["44 (2.Č)"],["17 (3.E)"],[],[],[],[],[],[],[]],[["9 (2.E)"],[],["1 (3.H)"],["44 (2.Č)"],[],[],[],[],[],[]],[["42 (3.F)"],[],["1 (3.H)"],["1 (3.H)"],["17 (3.E)"],["17 (3.E)"],["9 (2.E)"],[],[],[]],[["42 (3.F)"],[],["1 (3.H)"],["1 (3.H)"],["9 (2.E)"],["9 (2.E)"],[],[],[],[]],[[],["42 (3.F)"],["42 (3.F)"],["17 (3.E)"],[],[],["44 (2.Č)"],["1 (3.H)"],[],[]]],"U. Pertot":[[[],[],["15 (1.Č)"],[],[],[],[],[],[],[]],[[],[],[],["1 (3.H)"],["1 (3.H)"],["29 (1.D)"],["15 (1.Č)"],[],[],[]],[[],["29 (1.D)"],[],[],[],["15 (1.Č)"],[],[],[],[]],[[],["15 (1.Č)"],[],[],[],[],[],["29 (1.D)"],[],[]],[[],[],["1 (3.H)"],["1 (3.H)"],[],["29 (1.D)"],[],[],[],[]]],"N. Kne":[[[],[],[],[],[],[],[],[],[],[]],[["17 (3.H)"],["17 (3.H)"],["42 (4.H)"],["42 (4.H)"],[],[],[],[],[],[]],[["17 (4.H)"],["17 (4.H)"],[],[],["1 (3.H)"],[],[],["1 (3.H)"],[],[]],[[],[],[],[],[],[],["21 (4.H)"],[],[],[]],[[],[],[],[],["8 (3.H)"],["8 (3.H)"],[],[],[],[]]],"B. Kušar":[[[],[],[],["5 (1.C)"],["7 (4.H)"],["7 (4.H)"],[],[],[],[]],[[],[],[],["30 (3.H)"],["30 (3.H)"],["5 (1.C)"],["46 (2.D)"],[],[],[]],[[],[],["5 (1.C)"],[],["46 (2.D)"],["46 (2.D)"],["1 (3.H)"],[],[],[]],[["46 (2.D)"],[],["31 (4.H)"],["31 (4.H)"],[],[],[],[],[],[]],[["46 (2.D)"],[],["8 (3.H)"],["8 (3.H)"],[],[],["5 (1.C)"],[],[],[]]],"T. Avguštin":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],["21 (4.H)"],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],["1 (3.H)"],["1 (3.H)"],[]],[[],[],[],[],[],[],[],[],["1 (3.H)"],[]]],"B. Kovač":[[["11 (1.F)"],["11 (1.F)"],["22 (4.B)"],[],["17 (3.A)"],["17 (3.A)"],[],[],[],[]],[["42 (3.A)"],["42 (3.A)"],["47 (4.D)"],["47 (4.D)"],[],["22 (4.B)"],["2 (1.G)"],[],[],[]],[[],[],["43 (4.Č)"],["43 (4.Č)"],["43 (4.Č)"],["22 (4.B)"],["22 (4.B)"],[],[],[]],[[],[],[],[],[],["47 (4.D)"],[],[],[],[]],[["2 (1.G)"],["2 (1.G)"],["43 (4.Č)"],["11 (1.F)"],[],["17 (3.A)"],["47 (4.D)"],["42 (3.A)"],[],[]]],"V. Tsigaridas":[[["49 (3.G)"],["42 (3.F)"],["44 (2.Č)"],[],["5 (1.C)"],[],[],[],[],[]],[["11 (1.F)"],["29 (1.D)"],["4 (3.F)"],["4 (3.F)"],[],[],["5 (1.C)"],[],[],[]],[["4 (3.E)"],["4 (3.E)"],["11 (1.F)"],[],[],[],[],[],[],[]],[["15 (1.Č)"],[],["29 (1.D)"],["16 (2.C)"],["4 (3.G)"],["4 (3.G)"],[],[],[],[]],[["5 (1.C)"],["44 (2.Č)"],["17 (3.E)"],["16 (2.C)"],[],["15 (1.Č)"],[],[],[],[]]],"M. Vencelj":[[[],[],["9 (2.E)"],[],[],["46 (2.D)"],["16 (2.C)"],["13 (2.A)"],[],[]],[[],[],["45 (1.E)"],[],[],["13 (2.A)"],["9 (2.E)"],[],[],[]],[["11 (1.F)"],["25 (3.Č)"],[],[],[],[],[],[],[],[]],[[],["45 (1.E)"],["11 (1.F)"],["17 (3.E)"],[],[],[],[],[],[]],[[],["17 (3.E)"],["16 (2.C)"],["28 (3.Č)"],["28 (3.Č)"],[],["46 (2.D)"],[],[],[]]],"B. Lenaršič":[[["45 (1.E)"],[],[],[],[],[],[],[],[],[]],[["24 (2.B)"],["45 (1.E)"],["30 (3.C)"],[],[],[],[],[],[],[]],[["30 (3.C)"],["45 (1.E)"],["45 (1.E)"],["11 (1.F)"],[],[],["kd (3.B)"],[],[],[]],[["11 (1.F)"],["24 (2.B)"],["30 (3.C)"],["30 (3.C)"],["24 (2.B)"],[],["kd (3.B)"],["kd (3.B)"],[],[]],[["11 (1.F)"],["11 (1.F)"],["kd (3.B)"],[],[],["24 (2.B)"],["24 (2.B)"],[],[],[]]],"E. Šmid":[[[],[],[],[],[],[],[],["5 (1.C)"],[],[]],[[],[],[],["29 (1.D)"],[],["48 (1.B)"],[],[],[],[]],[["15 (1.Č)"],["11 (1.F)"],[],[],["45 (1.E)"],[],["29 (1.D)"],["24 (3.H)"],["24 (3.H)"],[]],[[],["11 (1.F)"],["15 (1.Č)"],["3 (1.A)"],[],["48 (1.B)"],["2 (1.G)"],["45 (1.E)"],[],[]],[[],[],[],[],[],["5 (1.C)"],["3 (1.A)"],["2 (1.G)"],[],[]]],"A. Bizjak":[[[],["45 (1.E)"],["11 (1.F)"],[],[],["16 (2.C)"],["kd (3.B)"],["44 (2.Č)"],[],[]],[[],[],["44 (2.Č)"],[],[],["16 (2.C)"],["24 (2.B)"],[],[],[]],[[],[],[],[],[],["29 (1.D)"],["11 (1.F)"],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],["24 (2.B)"],[],[],[],["kd (3.B)"],["29 (1.D)"],["45 (1.E)"],[],[]]],"K. Škufca":[[[],["43 (4.Č)"],["29 (1.D)"],[],["49 (3.C)"],["49 (3.C)"],["11 (1.A)"],["11 (1.A)"],[],[]],[[],[],[],[],[],["23 (4.A)"],["23 (4.A)"],[],[],[]],[["46 (2.A)"],["46 (2.A)"],["44 (2.Č)"],["44 (2.Č)"],[],["23 (4.A)"],[],[],[],[]],[[],[],[],[],[],["44 (2.Č)"],["43 (4.Č)"],["43 (4.Č)"],[],[]],[["29 (1.D)"],["29 (1.D)"],["11 (1.A)"],[],[],["49 (3.C)"],[],["46 (2.A)"],[],[]]],"L. Grahelj":[[[],[],[],[],["11 (1.F)"],["2 (1.G)"],["44 (2.Č)"],["16 (2.C)"],[],[]],[[],[],[],["45 (1.E)"],["16 (2.C)"],["44 (2.Č)"],["11 (1.F)"],[],[],[]],[["44 (2.Č)"],["2 (1.G)"],[],[],[],["11 (1.F)"],["45 (1.E)"],[],[],[]],[["45 (1.E)"],["16 (2.C)"],["2 (1.G)"],[],[],[],[],[],[],[]],[[],["16 (2.C)"],["44 (2.Č)"],["45 (1.E)"],[],[],["2 (1.G)"],["11 (1.F)"],[],[]]],"Z. Vrbinc":[[[],[],[],[],[],[],[],[],[],[]],[["7 (3.B)"],["7 (3.B)"],[],["7 (1.F)"],["7 (1.F)"],["7 (1.A)"],["7 (1.A)"],["7 (3.Č)"],["7 (3.Č)"],[]],[["7 (1.B)"],["7 (1.B)"],["7 (1.D)"],["7 (1.D)"],[],["7 (1.C)"],["7 (1.C)"],[],[],[]],[[],[],[],["7 (1.D)"],["7 (1.D)"],[],["7 (1.A)"],["7 (1.C)"],[],[]],[["7 (3.B)"],[],[],["7 (1.B)"],["11 (1.F)"],["7 (1.F)"],["7 (1.F)"],["7 (3.Č)"],[],[]]],"D. Zupan":[[["27 (3.A)"],["kd (3.B)"],["25 (3.Č)"],["45 (1.E)"],[],["11 (1.F)"],["31 (4.A)"],["31 (4.A)"],[],[]],[[],[],[],[],[],["31 (1.E)"],["31 (1.E)"],[],[],[]],[["27 (3.A)"],[],["31 (1.D)"],["31 (1.D)"],["31 (1.G)"],["31 (1.G)"],[],[],[],[]],[["31 (4.A)"],["31 (4.A)"],["kd (3.B)"],[],[],["25 (3.Č)"],["30 (3.C)"],["15 (1.Č)"],[],[]],[[],["30 (3.C)"],["29 (1.D)"],["2 (1.G)"],[],["31 (1.F)"],["31 (1.F)"],["15 (1.Č)"],[],[]]],"A. Lapuh":[[["30 (3.C)"],["25 (3.Č)"],[],["15 (1.Č)"],[],["45 (1.E)"],["17 (3.E)"],["29 (1.D)"],[],[]],[[],[],["25 (3.Č)"],[],["12 (4.A)"],["11 (1.F)"],["29 (1.D)"],[],[],[]],[["22 (4.A)"],["22 (4.A)"],["2 (1.G)"],[],[],["45 (1.E)"],["30 (3.C)"],[],[],[]],[[],[],[],[],[],["11 (1.F)"],["17 (3.E)"],["2 (1.G)"],[],[]],[["15 (1.Č)"],[],[],[],[],[],[],[],[],[]]],"S. Resnik":[[[],[],[],[],["44 (3.A)"],["44 (3.A)"],["45 (1.A)"],["45 (1.A)"],[],[]],[[],[],["22 (4.B)"],["22 (4.B)"],[],["6 (4.C)"],["6 (4.C)"],[],[],[]],[[],[],["16 (2.C)"],["16 (2.C)"],[],["6 (4.C)"],[],["13 (2.A)"],["13 (2.A)"],[]],[[],[],[],[],[],["16 (2.C)"],["48 (1.B)"],["48 (1.B)"],[],[]],[[],["48 (1.B)"],["45 (1.A)"],[],[],["11 (3.A)"],["22 (4.B)"],["13 (2.A)"],[],[]]],"M. Kranjc-Zevnik":[[["48 (1.B)"],["48 (1.B)"],[],[],["29 (1.D)"],["29 (1.D)"],["15 (1.Č)"],["15 (1.Č)"],[],[]],[["3 (1.A)"],["3 (1.A)"],[],[],["2 (1.G)"],["2 (1.G)"],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],["5 (1.C)"],["5 (1.C)"],["11 (1.F)"],["11 (1.F)"],[],[]],[[],[],[],[],[],["45 (1.E)"],["45 (1.E)"],[],[],[]]],"T. Dermota":[[["kd (3.B)"],["30 (3.C)"],["12 (4.A)"],[],[],[],["27 (3.A)"],[],[],[]],[["12 (4.A)"],["12 (4.A)"],[],[],[],["kd (3.B)"],["30 (3.C)"],[],[],[]],[[],[],["kd (3.B)"],[],["30 (3.C)"],["27 (3.A)"],["12 (4.A)"],[],[],[]],[["30 (3.C)"],["27 (3.A)"],[],[],[],[],[],[],[],[]],[[],[],[],["27 (3.A)"],[],["12 (4.A)"],["kd (3.B)"],[],[],[]]],"N. Ovsenek":[[[],[],[],[],[],[],[],[],[],[]],[["kd (3.Č)"],["kd (3.Č)"],[],[],[],[],[],[],[],[]],[["12 (4.E)"],["12 (4.E)"],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[["kd (3.Č)"],[],[],[],[],[],[],["12 (4.E)"],[],[]]],"M. Veber":[[["42 (3.F)"],["12 (4.B)"],[],["16 (2.C)"],[],["13 (2.A)"],["12 (4.B)"],[],[],[]],[[],[],[],[],[],[],["49 (3.G)"],[],[],[]],[[],["44 (2.Č)"],[],[],["13 (2.A)"],["13 (2.A)"],["13 (2.A)"],[],[],[]],[["12 (4.B)"],["12 (4.B)"],["44 (2.Č)"],["44 (2.Č)"],[],["42 (3.F)"],["12 (4.B)"],["12 (4.B)"],[],[]],[[],[],[],[],["49 (3.G)"],["16 (2.C)"],["16 (2.C)"],[],[],[]]],"J. Perko":[[[],[],[],[],[],[],[],[],[],[]],[["29 (1.D)"],[],["12 (4.A)"],["12 (4.A)"],["22 (4.B)"],["15 (1.Č)"],["22 (4.B)"],[],[],[]],[[],["15 (1.Č)"],[],[],[],[],[],[],[],[]],[["29 (1.D)"],["29 (1.D)"],["22 (4.B)"],["22 (4.B)"],[],["12 (4.A)"],[],[],[],[]],[["12 (4.A)"],["12 (4.A)"],["15 (1.Č)"],["15 (1.Č)"],["22 (4.B)"],["22 (4.B)"],[],["29 (1.D)"],[],[]]],"P. Veldin":[[["17 (3.E)"],["14 (4.A)"],["42 (3.F)"],[],["6 (4.C)"],[],[],["25 (3.Č)"],[],[]],[[],[],["17 (3.E)"],["43 (4.Č)"],["6 (4.C)"],[],["25 (3.Č)"],[],[],[]],[["5 (1.C)"],["42 (3.F)"],["12 (4.A)"],["14 (4.F)"],[],["30 (3.C)"],["2 (1.G)"],[],[],[]],[[],[],[],[],[],["2 (1.G)"],["14 (4.A)"],["14 (4.A)"],[],[]],[[],["43 (4.Č)"],["6 (4.C)"],[],["12 (4.A)"],["14 (4.F)"],["30 (3.C)"],["5 (1.C)"],[],[]]],"M. Hribar":[[["46 (2.D)"],[],[],["6 (4.C)"],[],["12 (4.A)"],[],[],[],[]],[["6 (4.C)"],["6 (4.C)"],["46 (2.D)"],["46 (2.D)"],[],["17 (3.E)"],["17 (3.E)"],[],[],[]],[[],[],[],["42 (3.F)"],[],[],[],[],[],[]],[[],["17 (3.E)"],["12 (4.A)"],["12 (4.A)"],[],[],["42 (3.F)"],["42 (3.F)"],[],[]],[[],[],["12 (4.A)"],[],[],["6 (4.C)"],["42 (3.F)"],[],[],[]]],"B. Triler":[[[],["22 (4.A)"],["kd (3.B)"],[],["30 (3.A)"],["30 (3.A)"],["3 (1.A)"],["3 (1.A)"],[],[]],[["25 (3.C)"],["25 (3.C)"],[],[],[],["12 (4.A)"],["12 (4.A)"],[],[],[]],[["24 (2.A)"],["24 (2.A)"],[],["15 (3.A)"],[],["12 (4.A)"],[],["48 (4.A)"],["48 (4.A)"],[]],[[],[],[],[],["kd (3.B)"],["kd (3.B)"],["22 (4.A)"],["22 (4.A)"],[],[]],[["25 (3.C)"],[],["3 (1.A)"],[],["43 (2.A)"],["30 (3.A)"],[],["24 (2.A)"],[],[]]],"N. Adžič":[[["5 (4.E)"],["5 (4.E)"],[],["7 (2.A)"],["25 (3.A)"],["25 (3.A)"],["6 (1.A)"],["6 (1.A)"],[],[]],[[],[],[],[],[],["45 (4.A)"],["45 (4.A)"],["12 (3.A)"],["12 (3.A)"],[]],[[],[],[],[],[],["42 (4.A)"],[],["5 (2.A)"],["5 (2.A)"],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],["46 (1.A)"],[],[],["28 (3.A)"],[],["14 (3.A)"],[],[]]],"M. Povšin-Dubravica":[[["13 (2.A)"],["13 (2.A)"],["43 (4.Č)"],["23 (4.E)"],["48 (1.B)"],["48 (1.B)"],[],["9 (2.E)"],[],[]],[["43 (4.Č)"],["43 (4.Č)"],[],[],[],[],[],[],[],[]],[[],["3 (1.A)"],["3 (1.A)"],["48 (1.B)"],[],[],["43 (4.Č)"],[],[],[]],[["44 (2.Č)"],["44 (2.Č)"],["23 (4.E)"],["13 (2.A)"],[],["3 (1.A)"],[],[],[],[]],[["9 (2.E)"],["9 (2.E)"],[],["44 (2.Č)"],["23 (4.E)"],["23 (4.E)"],[],[],[],[]]],"D. Zupanc":[[[],[],[],[],[],[],[],[],[],[]],[["13 (2.A)"],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[["13 (2.A)"],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]],"I. Zupan":[[[],[],[],[],[],[],["43 (4.B)"],["43 (4.B)"],["43 (4.B)"],["43 (4.B)"]],[[],["16 (2.C)"],["24 (2.B)"],[],[],[],[],[],[],[]],[["13 (4.C)"],["13 (4.C)"],[],[],[],["44 (2.Č)"],["24 (2.B)"],["22 (4.Č)"],["22 (4.Č)"],[]],[["43 (4.B)"],["43 (4.B)"],[],["46 (2.D)"],[],["13 (2.A)"],["16 (2.C)"],[],[],[]],[[],[],[],["46 (2.D)"],[],["44 (2.Č)"],["13 (2.A)"],[],[],[]]],"G. Markič":[[["9 (2.E)"],["27 (3.A)"],["46 (2.D)"],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],["27 (3.A)"],["46 (2.D)"],[],[],[],[],[],[]],[["49 (3.G)"],["13 (2.A)"],[],[],[],[],[],[],[],[]],[["13 (2.A)"],["49 (3.G)"],["9 (2.E)"],[],[],[],[],[],[],[]]],"P. Zevnik":[[[],[],[],[],[],[],[],[],[],[]],[[],["13 (2.A)"],["43 (4.Č)"],["49 (3.G)"],[],["25 (3.Č)"],[],[],[],[]],[["49 (3.G)"],["49 (3.G)"],["13 (2.A)"],["25 (3.Č)"],[],["25 (3.Č)"],[],[],[],[]],[["25 (3.Č)"],["25 (3.Č)"],["49 (3.G)"],[],["43 (4.Č)"],["43 (4.Č)"],[],[],[],[]],[[],[],["13 (2.A)"],["13 (2.A)"],[],["43 (4.Č)"],["43 (4.Č)"],[],[],[]]],"M. Lokar":[[["24 (2.B)"],["17 (3.E)"],[],["47 (4.D)"],["47 (4.D)"],["47 (4.D)"],["13 (2.A)"],[],[],[]],[["47 (4.D)"],["24 (2.B)"],["13 (2.A)"],[],[],["42 (3.F)"],[],[],[],[]],[[],[],["17 (3.E)"],["13 (2.A)"],["42 (3.F)"],["24 (2.B)"],["47 (4.D)"],[],[],[]],[["24 (2.B)"],["42 (3.F)"],["17 (3.E)"],[],[],[],[],[],[],[]],[[],["13 (2.A)"],["47 (4.D)"],["42 (3.F)"],[],[],["17 (3.E)"],[],[],[]]],"T. Mohar":[[["6 (4.A)"],["6 (4.A)"],["13 (2.A)"],[],[],["24 (2.B)"],["4 (4.A)"],["4 (4.A)"],[],[]],[[],[],[],[],[],["30 (3.C)"],["13 (2.A)"],[],[],[]],[["25 (3.Č)"],[],[],[],[],[],[],[],[],[]],[["4 (4.A)"],["4 (4.A)"],[],[],[],["24 (2.B)"],["4 (4.A)"],["4 (4.A)"],[],[]],[[],["25 (3.Č)"],["30 (3.C)"],[],[],[],[],[],[],[]]],"S. Grošelj":[[[],[],[],[],["13 (2.A)"],[],["22 (4.A)"],["22 (4.A)"],["22 (4.A)"],["22 (4.A)"]],[["16 (2.C)"],["46 (2.D)"],[],["13 (2.A)"],["24 (2.B)"],["9 (2.E)"],[],[],[],[]],[[],[],["24 (2.B)"],[],["9 (2.E)"],["16 (2.C)"],["44 (2.Č)"],[],[],[]],[["22 (4.A)"],["22 (4.A)"],[],[],[],["46 (2.D)"],["44 (2.Č)"],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]],"M. Pertot":[[[],["3 (1.A)"],["14 (4.F)"],["14 (4.F)"],[],[],["48 (1.B)"],[],[],[]],[["14 (4.F)"],[],["6 (4.C)"],["3 (1.A)"],["48 (1.B)"],[],[],[],[],[]],[[],[],["14 (4.F)"],["3 (1.A)"],[],["48 (1.B)"],["6 (4.C)"],[],[],[]],[[],[],["6 (4.C)"],["48 (1.B)"],["48 (1.B)"],["14 (4.F)"],[],["3 (1.A)"],[],[]],[["6 (4.C)"],["6 (4.C)"],[],[],[],[],[],[],[],[]]],"M. Zelič":[[[],[],[],[],[],["15 (1.Č)"],["14 (4.B)"],["48 (1.B)"],[],[]],[[],["47 (4.D)"],["26 (4.H)"],["26 (4.H)"],["23 (4.E)"],[],["48 (1.B)"],[],[],[]],[["21 (4.H)"],["21 (4.H)"],["22 (4.B)"],[],[],["3 (1.A)"],["23 (4.E)"],[],[],[]],[["14 (4.B)"],["14 (4.B)"],[],[],[],[],[],[],[],[]],[[],["47 (4.D)"],["22 (4.B)"],[],[],["3 (1.A)"],["15 (1.Č)"],[],[],[]]],"N. Zupančič Logar":[[[],[],[],[],["4 (3.A)"],["4 (3.A)"],["2 (1.A)"],["2 (1.A)"],[],[]],[["49 (3.C)"],["49 (3.C)"],[],[],[],["14 (4.A)"],["14 (4.A)"],["49 (3.C)"],[],[]],[["43 (2.A)"],["43 (2.A)"],["29 (2.C)"],["29 (2.C)"],[],["14 (4.A)"],[],["9 (4.D)"],["9 (4.D)"],[]],[[],[],[],[],[],["29 (2.C)"],[],[],[],[]],[["14 (4.D)"],[],["2 (1.A)"],[],[],["9 (3.A)"],[],["43 (2.A)"],[],[]]],"M. Lušina-Basaj":[[["16 (2.C)"],["16 (2.C)"],["6 (4.C)"],[],["46 (2.D)"],[],[],[],[],[]],[["46 (2.D)"],[],[],["14 (4.F)"],[],[],[],[],[],[]],[[],[],["6 (4.C)"],["6 (4.C)"],["16 (2.C)"],[],["16 (2.C)"],[],[],[]],[["16 (2.C)"],[],["14 (4.F)"],["14 (4.F)"],["6 (4.C)"],["6 (4.C)"],["46 (2.D)"],["46 (2.D)"],[],[]],[[],["14 (4.F)"],["14 (4.F)"],[],[],[],[],[],[],[]]],"H. Križaj Smrdel":[[[],["24 (2.B)"],["24 (2.B)"],[],["9 (2.E)"],["3 (1.A)"],[],[],[],[]],[[],["9 (2.E)"],["9 (2.E)"],[],["kd (3.B)"],[],[],[],[],[]],[[],["5 (1.C)"],["48 (1.B)"],["24 (2.B)"],["27 (3.A)"],[],[],[],[],[]],[[],["46 (2.D)"],["46 (2.D)"],[],["14 (4.F)"],["27 (3.A)"],[],[],[],[]],[[],["kd (3.B)"],["48 (1.B)"],["5 (1.C)"],["3 (1.A)"],["46 (2.D)"],[],[],[],[]]],"M. Dačić":[[["15 (4.C)"],["15 (4.C)"],["30 (3.C)"],[],[],["kd (3.B)"],["25 (3.Č)"],[],[],[]],[[],[],["27 (3.A)"],[],[],["49 (3.G)"],["42 (3.F)"],[],[],[]],[["kd (3.B)"],["27 (3.A)"],["49 (3.G)"],[],["25 (3.Č)"],[],["17 (3.E)"],[],[],[]],[[],["30 (3.C)"],["42 (3.F)"],[],[],["17 (3.E)"],["9 (4.C)"],["9 (4.C)"],["9 (4.C)"],["9 (4.C)"]],[[],[],[],[],[],[],[],[],[],[]]],"K. Lovenjak":[[["29 (1.D)"],["29 (1.D)"],["45 (1.E)"],[],[],[],[],[],[],[]],[["15 (1.Č)"],["15 (1.Č)"],["16 (2.C)"],[],[],[],[],[],[],[]],[["16 (2.C)"],["16 (2.C)"],[],[],["kd (3.B)"],["kd (3.B)"],[],[],[],[]],[[],["kd (3.B)"],["25 (3.Č)"],["25 (3.Č)"],[],["15 (1.Č)"],["24 (2.B)"],["24 (2.B)"],[],[]],[["45 (1.E)"],["45 (1.E)"],[],["24 (2.B)"],["29 (1.D)"],[],["25 (3.Č)"],[],[],[]]],"A. Omejec":[[[],[],["5 (1.C)"],[],["42 (3.Č)"],["42 (3.Č)"],["24 (4.B)"],["24 (4.B)"],["24 (4.B)"],["24 (4.B)"]],[["5 (1.C)"],["5 (1.C)"],["15 (1.Č)"],["15 (1.Č)"],[],["47 (4.A)"],["47 (4.A)"],[],[],[]],[["9 (2.B)"],["9 (2.B)"],[],[],["15 (1.Č)"],["47 (4.A)"],["15 (1.Č)"],[],[],[]],[["21 (4.B)"],["21 (4.B)"],[],[],[],[],[],[],[],[]],[[],[],[],[],[],["42 (3.Č)"],[],["9 (2.B)"],[],[]]],"U. Petrič":[[["28 (4.C)"],["28 (4.C)"],[],["29 (1.D)"],[],[],["29 (1.D)"],["42 (3.F)"],[],[]],[["2 (1.G)"],["28 (3.A)"],["29 (1.D)"],["5 (1.C)"],[],["28 (1.A)"],["28 (1.A)"],[],[],[]],[["28 (1.B)"],["28 (1.B)"],["28 (1.Č)"],["28 (1.Č)"],[],["28 (1.C)"],["28 (1.C)"],[],[],[]],[[],["2 (1.G)"],["48 (1.B)"],["42 (3.F)"],["15 (1.Č)"],[],["28 (4.C)"],["28 (4.C)"],[],[]],[["3 (1.A)"],[],[],[],[],[],[],[],[],[]]],"D. Peklaj":[[["31 (4.A)"],["31 (4.A)"],["16 (2.C)"],[],["31 (2.Č)"],["9 (2.E)"],[],[],[],[]],[["44 (2.Č)"],[],["31 (3.F)"],["31 (3.F)"],["44 (2.Č)"],[],[],[],[],[]],[["31 (3.E)"],["31 (3.E)"],["42 (3.F)"],[],[],["9 (2.E)"],["46 (2.D)"],[],[],[]],[["17 (3.E)"],[],["16 (2.C)"],["24 (2.B)"],["31 (3.G)"],["31 (3.G)"],["31 (4.A)"],["31 (4.A)"],[],[]],[["24 (2.B)"],["46 (2.D)"],["49 (3.G)"],[],[],[],[],[],[],[]]],"B. Urbanc":[[[],[],[],[],["sptel (4.A)"],["vp (4.Č)"],["sptel (3.F)"],["vp (3.E)"],["vp (2.A)"],[]],[[],[],[],["sptel (3.E)"],[],[],[],[],[],[]],[[],[],[],["17 (3.E)"],["vp (4.A)"],["zgtel (3.F)"],["zgtel (4.F)"],[],[],[]],[["sptel (1.A)"],["sptel (1.A)"],["sptel (2.A)"],[],[],[],[],[],[],[]],[[],[],[],[],["zgtel (4.Č)"],["sptel (2.A)"],["vp (4.F)"],["zgtel (1.A)"],[],[]]],"B. Logar":[[["2 (1.G)"],["2 (1.G)"],["21 (4.H)"],["21 (4.H)"],[],["5 (1.C)"],["5 (1.C)"],[],[],[]],[["48 (1.B)"],["48 (1.B)"],[],[],["21 (4.H)"],["21 (4.H)"],[],[],[],[]],[["2 (1.G)"],[],["21 (4.H)"],["21 (4.H)"],["5 (1.C)"],[],["48 (1.B)"],[],[],[]],[["2 (1.G)"],[],["5 (1.C)"],[],[],[],[],[],[],[]],[["48 (1.B)"],[],[],[],[],[],[],[],[],[]]],"O. Ogris":[[["3 (1.A)"],[],["31 (3.H)"],["31 (3.H)"],[],[],[],[],[],[]],[["30 (3.C)"],["30 (3.A)"],["48 (1.B)"],[],[],[],[],[],[],[]],[[],[],[],[],["2 (4.H)"],["2 (4.H)"],[],[],[],[]],[["7 (4.H)"],["7 (4.H)"],["3 (1.A)"],[],["49 (3.H)"],["49 (3.H)"],["5 (1.C)"],[],[],[]],[["31 (4.H)"],["31 (4.H)"],["5 (1.C)"],[],["31 (3.H)"],["48 (1.B)"],[],["30 (3.A)"],[],[]]],"A. Brlogar":[[[],[],[],[],["21 (4.H)"],["21 (4.H)"],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],["21 (4.H)"],["21 (4.H)"],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]],"H. Kapus":[[["25 (3.Č)"],["9 (2.E)"],["49 (3.G)"],["43 (4.Č)"],[],["22 (4.B)"],[],[],[],[]],[["22 (4.B)"],["22 (4.B)"],["49 (3.G)"],["9 (2.E)"],[],["43 (4.Č)"],["43 (4.Č)"],[],[],[]],[[],[],["9 (2.E)"],["49 (3.G)"],["49 (3.G)"],["43 (4.Č)"],["25 (3.Č)"],[],[],[]],[["9 (2.E)"],["49 (3.G)"],["43 (4.Č)"],[],[],["22 (4.B)"],["25 (3.Č)"],[],[],[]],[[],["22 (4.B)"],["25 (3.Č)"],[],[],[],[],[],[],[]]],"D. Heredero Zorzo":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[["48 (4.E)"],["48 (4.E)"],[],[],["22 (4.E)"],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]],"V. Kukec":[[["23 (4.A)"],["23 (4.A)"],["27 (3.A)"],[],["24 (2.B)"],["27 (2.Č)"],["28 (4.A)"],["28 (4.A)"],[],[]],[["28 (3.A)"],["44 (2.Č)"],[],["28 (3.C)"],["28 (3.C)"],[],[],[],[],[]],[[],[],["30 (3.C)"],["27 (3.A)"],[],[],[],[],[],[]],[["23 (4.A)"],["23 (4.A)"],["24 (2.B)"],["28 (3.A)"],["28 (3.A)"],[],["23 (4.A)"],["23 (4.A)"],[],[]],[["28 (3.C)"],[],[],[],[],[],[],[],[],[]]],"A. Jesenovec":[[[],[],["3 (1.A)"],["3 (1.A)"],[],[],[],[],[],[]],[["23 (4.E)"],["23 (4.E)"],["3 (1.A)"],[],[],["27 (3.A)"],["27 (3.A)"],[],[],[]],[["3 (1.A)"],[],["47 (4.D)"],["47 (4.D)"],[],[],[],[],[],[]],[[],[],["47 (4.D)"],["23 (4.E)"],[],["23 (4.E)"],["27 (3.A)"],[],[],[]],[[],["23 (4.E)"],["23 (4.E)"],[],["47 (4.D)"],["47 (4.D)"],["27 (3.A)"],[],[],[]]],"F. Rozman":[[[],[],[],[],[],["23 (4.E)"],[],[],[],[]],[[],[],["23 (4.E)"],[],[],[],[],[],[],[]],[[],[],["23 (4.E)"],["23 (4.E)"],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],["23 (4.E)"],[],[],[]]],"P. Flajnik":[[["4 (4.H)"],["4 (4.H)"],["48 (1.B)"],[],[],[],[],[],[],[]],[["4 (3.A)"],["4 (3.C)"],[],[],[],[],[],[],[],[]],[[],[],[],[],["3 (1.A)"],[],["3 (1.A)"],[],[],[]],[["28 (3.A)"],[],[],[],[],[],[],[],[],[]],[["4 (3.A)"],["3 (1.A)"],["4 (4.H)"],["4 (4.H)"],[],[],["48 (1.B)"],["4 (3.A)"],[],[]]],"J. Jocif":[[["zgtel (1.C)"],["zgtel (1.C)"],["zgtel (4.E)"],[],[],[],[],[],[],[]],[[],[],[],[],["sptel (3.Č)"],["sptel (2.B)"],["sptel (2.Č)"],[],[],[]],[["zgtel (1.E)"],["zgtel (3.B)"],["vp (3.Č)"],["45 (1.E)"],[],[],[],[],[],[]],[[],[],[],[],["vp (4.E)"],["sptel (1.E)"],["sptel (1.E)"],["vp (2.Č)"],["sptel (2.B)"],[]],[["zgtel (2.Č)"],["zgtel (1.C)"],["sptel (2.B)"],["sptel (3.B)"],[],[],[],[],[],[]]],"M. Žepič":[[[],[],[],["8 (1.G)"],["8 (1.G)"],[],["8 (4.A)"],["8 (4.A)"],[],[]],[["8 (3.B)"],["8 (3.B)"],[],["8 (3.B)"],["9 (2.E)"],["8 (1.E)"],["8 (1.E)"],["8 (3.B)"],["8 (3.B)"],[]],[["8 (4.C)"],["8 (4.C)"],["8 (1.Č)"],["8 (1.Č)"],["8 (1.G)"],["8 (1.G)"],[],["8 (4.A)"],["8 (4.A)"],[]],[["8 (4.A)"],["8 (4.A)"],[],["8 (1.E)"],["8 (1.E)"],[],["8 (1.Č)"],[],[],[]],[["8 (3.B)"],[],[],[],[],[],[],[],[],[]]],"T. Varjačič":[[[],[],[],[],[],[],["9 (2.E)"],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],["9 (2.E)"],[],[],[]]],"J. Mali":[[["sptel (1.Č)"],["sptel (1.Č)"],["sptel (4.D)"],[],[],[],[],[],[],[]],[[],["zgtel (1.G)"],["zgtel (1.G)"],[],[],["vp (2.D)"],["zgtel (2.C)"],[],[],[]],[["vp (1.D)"],["vp (3.B)"],[],[],[],[],[],[],[],[]],[[],[],[],["zgtel (1.G)"],["sptel (4.D)"],["zgtel (1.D)"],["zgtel (1.D)"],["sptel (2.C)"],["zgtel (2.D)"],[]],[["sptel (2.C)"],["vp (1.Č)"],["vp (2.D)"],["vp (3.B)"],[],[],[],[],[],[]]],"R. Sajovic":[[["vp (1.C)"],["vp (1.C)"],["vp (4.D)"],[],[],[],[],[],[],[]],[[],["vp (1.F)"],["vp (1.F)"],[],["zgtel (3.Č)"],["zgtel (2.B)"],["vp (2.C)"],[],[],[]],[["sptel (1.D)"],["sptel (3.C)"],["sptel (3.Č)"],[],[],[],[],[],[],[]],[[],[],[],["sptel (1.F)"],["zgtel (4.D)"],["vp (1.D)"],["vp (1.D)"],["zgtel (2.C)"],["vp (2.B)"],[]],[["vp (2.C)"],["sptel (1.C)"],["zgtel (2.B)"],["zgtel (3.C)"],[],[],[],[],[],[]]],"M. Cvahte":[[[],[],[],[],["vp (4.B)"],["sptel (4.C)"],["vp (3.F)"],["zgtel (3.A)"],["zgtel (2.E)"],[]],[[],["sptel (1.F)"],["sptel (1.F)"],["zgtel (3.A)"],[],[],[],[],[],[]],[[],[],[],[],["zgtel (4.B)"],["sptel (3.F)"],[],[],[],[]],[["vp (1.B)"],["vp (1.B)"],["vp (2.E)"],["vp (1.F)"],[],[],[],[],[],[]],[[],[],[],[],["vp (4.C)"],["zgtel (2.E)"],[],["vp (1.B)"],[],[]]],"N. Jerkovič":[[[],[],[],[],["zgtel (4.A)"],["zgtel (4.C)"],["zgtel (3.F)"],["sptel (3.A)"],["sptel (2.A)"],[]],[[],[],[],["vp (3.A)"],[],[],[],[],[],[]],[[],[],[],[],["sptel (4.A)"],["vp (3.F)"],["sptel (4.F)"],[],[],[]],[["zgtel (1.A)"],["zgtel (1.A)"],["zgtel (2.A)"],[],[],[],[],[],[],[]],[[],[],[],[],["sptel (4.C)"],["vp (2.A)"],["sptel (4.F)"],["sptel (1.A)"],[],[]]]}
			,			
			{"":[]}
			,			
			{"":[]}
			,			
			{"":[]}
		];

Object.keys(o[0]).sort(function(a, b) {
  if (a.replace("Č", "Čžžž").replace("Š", "Sžžž").split(". ")[1] < b.replace("Č", "Čžžž").replace("Š", "Sžžž").split(". ")[1]) {
    return -1;
  } else {
    return 1;
  }
}).forEach(function(profesor) {
    console.log(profesor); // Add adjacent html oz. create element
	profesorji.insertAdjacentHTML("beforeend", "<span class='wannabelink' onclick='prikaz(&quot;"+profesor+"&quot;)'>" + profesor + "</span><br/>"); // Klik na link profesorja bo poklical funkicjo prikaz(profesor)
	imena.insertAdjacentHTML("beforeend", "<option value='"+profesor+"'>");
});

if((navigator.userAgent.toLowerCase().indexOf('firefox') > -1) && (navigator.userAgent.toLowerCase().indexOf("android") > -1)) {iskanje.remove(); imena.remove();} // Firefox Focus za Android ne podpira datalist za autocomplete

lastProfesor = "";

function prikaz(profesor = lastProfesor) {
    	
	lastProfesor = profesor; // Zabelezimo nazadnje izbranega profesorja, da ob spremembi tedna/urnika lahko klicemo fn s profesorjem
	var tedenUrnika = document.querySelector('input[name="urnik"]:checked').value; // Kateri urnik je izbran
	
	var zbirka = o[tedenUrnika-1][profesor]; // Kasneje bo tu zajeta stevilka urnika, glede na selected radio button  ||| [0] -> [izbraniTeden]
    //console.log(zbirka);
	
    var tabela = document.getElementById("tbl");

    for (var s = 0; s < zbirka.length; s++) {

        for (var v = 0; v < zbirka[s].length; v++) {
            //console.log(zbirka[s][v]);
            vrste = tabela.getElementsByTagName("tr");
            var stolpci = vrste[v + 1].getElementsByTagName("td");
            stolpci[s + 1].innerText = zbirka[s][v];
            stolpci[s + 1].innerText = stolpci[s + 1].innerText.replace(/,/g, ", ");

        }
    }
    tabela.getElementsByTagName("td")[0].innerText = "" + profesor + " | Urnik " + tedenUrnika; // vrste[0].getElementsByTagName("td")[0].innerText = "Urnik " + tedenUrnika + "\n" + profesor;
	obarvaj();
	
	/*location.href = "#";
	location.href = "#urnik";*/
	//document.getElementById("urnik").scrollIntoView();
	
	if(location.href.indexOf("#") === -1) {
		location.href = "#"; // Pricakovan odziv uporabnika, ce zeli zamenjati profesorja, je gumb Nazaj v brskalniku (na napravi) --> V ta namen dodamo en vnos v History, da ce slucajno to poskusi, pomotoma ne zapre strani. To storimo le enkrat, da history ni spam.
	}
	
	if(location.href.indexOf("#urnik") === -1) {
		location.href = "#urnik"; // Fix za WebKit
	}
	document.getElementById("urnik").scrollIntoView();
}


/* Samodejna izbira trenutnega urnika */
var tedni = [[[1598911200000,1599256740000],[1601244000000,1601675940000],[1604271600000,1604703540000],[1606690800000,1607122740000],[1609714800000,1610146740000],[1612134000000,1612565940000],[1615158000000,1615589940000],[1617660000000,1618005540000],[1620597600000,1621029540000],[1623016800000,1623448740000]],[[1599429600000,1599861540000],[1601848800000,1602280740000],[1604876400000,1605308340000],[1607295600000,1607727540000],[1610319600000,1610751540000],[1612825200000,1613170740000],[1615762800000,1616194740000],[1618178400000,1618610340000],[1621202400000,1621634340000],[1624226400000,1624571940000]],[[1600034400000,1600466340000],[1602453600000,1602885540000],[1605481200000,1605913140000],[1607900400000,1608332340000],[1610924400000,1611356340000],[1613343600000,1613775540000],[1616367600000,1616799540000],[1618783200000,1619215140000],[1621807200000,1622239140000]],[[1600639200000,1601071140000],[1603058400000,1603490340000],[1606086000000,1606517940000],[1608505200000,1608850740000],[1611529200000,1611961140000],[1614553200000,1614985140000],[1616968800000,1617400740000],[1619992800000,1620424740000],[1622412000000,1622843940000]]]
;

function stUrnika() {	
    for (var u = 0; u < tedni.length; u++) {
        for (var t = 0; t < tedni[u].length; t++) {
            if (tedni[u][t][0] <= Date.now() && tedni[u][t][1] >= Date.now()) {
				document.getElementById("urnik").innerHTML = "Trenutni urnik: <b>" + (u+1) + "</b>";
                return (u+1);
            } else if(tedni[u][t][0] <= (Date.now() + 172800000) && tedni[u][t][1] >= (Date.now() + 172800000)) {
				document.getElementById("urnik").innerHTML = "Prihajajoči urnik: <b>" + (u+1) + "</b>";
                return (u+1);
			}
        }
    }
	document.getElementById("urnik").innerHTML = "Počitnice <b>:)</b>";
	return ("");
}

document.getElementsByName("urnik")[stUrnika()-1].checked = true;


/* Obarvanje trenutne ure in dneva */
function obarvaj() {
   var d = new Date();

	for(var i = 1; i < vrste.length; i++) {
		var casovi = (vrste[i].getElementsByTagName("td")[0].innerText.split("\n")[1].split("(")[1].split(")")[0]);
		var us = casovi.split("–")[0].split(".")[0]; // ura start
		var ms = casovi.split("–")[0].split(".")[1]; // min start
		var ue = casovi.split("–")[1].split(".")[0]; // ura end
		var me = casovi.split("–")[1].split(".")[1]; // min end
		
		d.setHours(us);
		var cs = d.setMinutes(ms); // cas start
		
		d.setHours(ue);
		var ce = d.setMinutes(me); // cas end

		// Obarvamo trenutno uro in uro, ki pride čez 15 minut.
		if((Date.now() >= cs && Date.now() <= ce) || ((Date.now() + 900000) >= cs && (Date.now() + 900000) <= ce)) {
			//vrste[i].getElementsByTagName("td")[d.getDay() % 6].style.backgroundColor = "#fff496";
			var napredek = (Date.now() - cs)/(ce - cs);
			console.log(napredek);
			//vrste[i].getElementsByTagName("td")[d.getDay() % 6].style.cssText = "border: 2px green solid; background: linear-gradient(#90ee90 "+(napredek*100)+"%, #fff496 "+(napredek*100)+"%)"; 
			vrste[i].getElementsByTagName("td")[d.getDay() % 6].style.cssText = "background: linear-gradient(#fffddd "+(napredek*100)+"%, #fff496 "+(napredek*100)+"%)"; 
		}
	}

	vrste[0].getElementsByTagName("td")[d.getDay() % 6].style.cssText = "border: 2px solid #ffa500; background-color: #ffedcc"; // Obarvamo dan na vrhu
}