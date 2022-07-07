const usName = prompt("Ваше имя:");
const surname = prompt("Ваше фамилия:");
const patronymice = prompt("Ваше отчество:");
const ageYear =
  prompt("Ваше возрост в годах:") >= 18
    ? alert("you are big boy")
    : alert("you are baby");
const pol = confirm("Ваш пол:мужской?");
const pension = confirm("Вы на пенсии?");

alert(`Ваше имя:${usName},
Ваше фамилия:${surname} ,
Ваше отчество:${patronymice},
Ваше возрост в годах:${ageYear},
Ваш возрост в днях: ${ageYear * 365},
Ваш пол:мужской?${pol},
Вы на пенсии?${pension}`);

if (ageYear < 18) {
  alert("you are baby");
} else {
  alert("you are big boy");
}
