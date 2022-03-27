const inputEl = document.getElementById('soNguyen');
const viTri1El = document.getElementById('viTri1');
const viTri2El = document.getElementById('viTri2');
const buttonEl = document.getElementById('btnAdd');
const outputEl = document.getElementById('outputResult');
const buttonClearEl = document.getElementById('clearAdd');
const showArrayNumberEl = document.getElementById('showArrayNumber');
const btnConvert = document.getElementById('btnConvert');
const btnCauHoi = document.querySelectorAll('#btnCauHoi');
const arrNumber = [];

const checkPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i == 0) return false;
  }
  return true;
};

  const countPositive = arrNumber.filter((number) => number > 0).length;
  const countNegative = arrNumber.filter((number) => number < 0 && number !== 0).length;
 
btnCauHoi.forEach((itemCauHoi, index) => {
  switch (index + 1) {
    case 1:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = sumPositiveNumberInArray();
      });
      return;
    case 2:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = countPositiveNumberInArray();
      });
      return;
    case 3:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = findMinNumberInArray();
      });
      return;
    case 4:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = findMinPositiveNumberInArray();
      });
      return;
    case 5:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        outputEl.innerText = findLastEvenNumberInArray();
      });
      return;
    case 6:
      itemCauHoi.addEventListener('click', (e) => {
        e.preventDefault();
        const viTri1Val = +viTri1El.value;
        const viTri2Val = +viTri2El.value;
        outputEl.innerText = convertPositionNumberInArray(viTri1Val, viTri2Val);
      });
      return;
    
 
  }
});

buttonEl.addEventListener('click', function (event) {
  addNumberToArray();
});

buttonClearEl.addEventListener('click', function (event) {
  arrNumber.length = 0;
  showArrayNumberToText(arrNumber);
});

inputEl.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') addNumberToArray();
});
