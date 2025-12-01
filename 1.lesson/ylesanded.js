// 1. Harjutus: Massiivi Modifitseerimine ja Lõikamine (push, pop, slice)
// 1
const linnad = ["Tallinn", "Tartu", "Pärnu", "Narva"];
/*linnad.push("Kuressaare");
console.log(linnad);
*/

// 2
const eemaldatudLinn = linnad.pop();
/*
console.log(eemaldatudLinn);
*/

// 3
const esimesedKaks = linnad.slice(0, 2);
/*
console.log(esimesedKaks);
*/

// 4
/*
console.log(linnad);
console.log(esimesedKaks);
console.log(eemaldatudLinn);
*/





// 2. Harjutus: Massiivi Otsimine (indexOf ja includes)
// 1
const värvid = ["punane", "roheline", "sinine", "kollane", "roheline"];
/*
const kasMustOn = console.log(värvid.includes("must"));
*/

// 2
/*
const roheliseAsukoht = console.log(värvid.indexOf("roheline"));
*/

// 3
/*
const valgeAsukoht = console.log(värvid.indexOf("valge"));
*/

// 4
/*
const viimaneRoheline = console.log(värvid.lastIndexOf("roheline"));
*/





// 3. Harjutus: Massiivi Liitmine ja Jagamine (join ja split)
// 1
const ostukorv = ["piim", "leib", "juust", "munad"];

const separator = ', ';
/*
const ostunimekiri = console.log(ostukorv.join(separator));
*/

// 2
const toodeteKoodidStr = "A10-B25-C30-D45";
const separator2 = '-'
/*
const koodideMassiiv = console.log(toodeteKoodidStr.split(separator2))
*/

// 3
/*
const csvFormat = console.log(ostukorv.join());
*/





// 4. Harjutus: Massiivi Kontrollijad (some ja every)
// 1
const temperatuurid = [5, 12, 18, 2, 7, 10];
const kasKülmetab = (element) => element < 0
/*
console.log(temperatuurid.some(kasKülmetab));
*/

// 2
const kasJääbAlla20 = (element) => element < 20
/*
console.log(temperatuurid.every(kasJääbAlla20));
*/

// 3
const kasOnPäevaneTemperatuur = (element) => element > 0
/*
console.log(temperatuurid.every(kasOnPäevaneTemperatuur));
*/





// 5. Harjutus: Massiivi Keeruline Kombineerimine (concat ja spread operaator)
// 1
const juurviljad = ["porgand", "kartul"];
const puuviljad = ["õun", "pirn", "banaan"];
const marjad = ["maasikas", "mustikas"];
/*
const koikTooted_concat = console.log(juurviljad.concat(puuviljad));
*/

// 2
/*
const koikTooted_spread = console.log(...juurviljad, ...puuviljad, ...marjad);
*/

// 3
const segatud = console.log(["Sega-Sega", ...juurviljad, 100, ...puuviljad]);
console.log(juurviljad, puuviljad, marjad);





// Harjutused: JSON objekt ja JSON andmestruktuur, Rekursioon
// 1
const kasutajaProfiil = {
  nimi: "Jane Doe",
  vanus: 28,
  isOnline: true,
  tervitus: function() { return "Tere !" + this.nimi},
  tervitus2: () => "Tere !"
};

/*
const kasutajaProfiilFinished = {
  nimi: kasutajaProfiil.nimi,
  vanus: kasutajaProfiil.vanus,
  isOnline: kasutajaProfiil.isOnline,
  tervitus: kasutajaProfiil.tervitus(),
  tervitus2: kasutajaProfiil.tervitus2()
}
*/

function customParse(data){

  const clonedData = { ...data} 

  Object.keys(data).forEach(key => {
    if (typeof data[key] == 'function')
    {
      let _fn = data[key].bind(kasutajaProfiil)
      clonedData[key] = _fn() 
    } else {
      clonedData[key] = data[key]
    }
  })
  console.log(clonedData);
}

customParse(kasutajaProfiil)