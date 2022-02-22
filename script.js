// for Umid aka
let umidHeight = 1.7;
let umidWeight = 90;
let umidA;
umidA = umidWeight / umidHeight ** 2;
console.log(umidA);
if (umidA < 20) {
  console.log("Ozqin toifa");
} else if (umidA >= 20 && umidA <= 25) {
  console.log("O'rta toifa");
} else if (umidA > 25 && umidA < 30) {
  console.log("Og'irroq toifa");
} else {
  console.log("Juda og'ir toifa");
}
console.log("--------------");
// for Valisher

let valisherHeight = 1.8;
let valisherWeight = 70;
let valisherA;
valisherA = valisherWeight / valisherHeight ** 2;
console.log(valisherA);
if (valisherA < 20) {
  console.log("Ozqin toifa");
} else if (valisherA >= 20 && valisherA <= 25) {
  console.log("O'rta toifa");
} else if (valisherA > 25 && valisherA < 30) {
  console.log("Og'irroq toifa");
} else {
  console.log("Juda og'ir toifa");
}

let firstName = prompt("Ismingizni kiriting");
let weight = prompt(" Vazningizni kiriting");
let height = prompt("Bo`yingizni kiriting");

let rame = firstName;
let result = weight / height ** 2;

let natija = Math.trunc(result);

alert(result + rame + "    Vazningiz kilogram ekan");
