let massage = prompt(`ismingizni kiriting`);

let choise = prompt(`bironta harf kiriting`)

if (massage.includes(choise)) {
  alert(`${massage} ismining ichida ${choise} harfi mavjud`);
} else {
  alert(`${massage} ismining ichida ${choise} harfi mavjud emas`);
}