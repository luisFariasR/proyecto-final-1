const mortgageAmount = document.querySelector(`#mortgageAmount`);

const interestRate = document.querySelector(`#interestRate`);
const mortgageTerm = document.querySelector(`#mortgageTerm`);
const yearsSpan = document.querySelector(`.yearsSpan`);
const years = document.querySelector(`#years`);
const alertRate = document.querySelector(`#alertRate`);
const percentageSpan = document.querySelector(`#percentageSpan`);
const alertAmount = document.querySelector(`#alertAmount`);
const spanEuro = document.querySelector(`#spanEuro`);
const calcBtn = document.querySelector(`.calcBtn`);
const clear = document.querySelector(`#clear`)
const repaymentSelected = document.querySelector(`#repaymentSelected`)

calcBtn.addEventListener("click", function compute() {

  let r = getInterest();
  let n = getTerm();
  let p = getAmount();
  let numerador = p * r * (1 + r) ** n;
  let denominador = (1 + r) ** n - 1;
  let res = (numerador / denominador).toFixed(2);

  console.log(res);
});

function getTerm() {
  let getRes = parseInt(mortgageTerm.value);
  if (!isNaN(getRes) && getRes > 0) {
    years.classList.remove(`bg-danger`);
    mortgageTerm.classList.remove(`border-danger`);
    yearsSpan.classList.add(`d-none`);
    return getRes * 12;
    
  } else {
    years.classList.add(`bg-danger`);
    mortgageTerm.classList.add(`border-danger`);
    yearsSpan.classList.remove(`d-none`);
    return null;
  }
}

function getInterest() {
  if (!isNaN(interestRate.value) && interestRate.value > 0) {
    percentageSpan.classList.remove(`bg-danger`);
    interestRate.classList.remove(`border-danger`);
    alertRate.classList.add(`d-none`);
    return interestRate.value / 12;
  } else {
    percentageSpan.classList.add(`bg-danger`);
    interestRate.classList.add(`border-danger`);
    alertRate.classList.remove(`d-none`);
    return null;
  }
}
function getAmount() {
  if (!isNaN(mortgageAmount.value) && mortgageAmount.value > 0) {
    spanEuro.classList.remove(`bg-danger`);
    mortgageAmount.classList.remove(`border-danger`);
    alertAmount.classList.add(`d-none`);
    return parseFloat(mortgageAmount.value);
  } else {
    spanEuro.classList.add(`bg-danger`);
    mortgageAmount.classList.add(`border-danger`);
    alertAmount.classList.remove(`d-none`);
    return null;
  }
}
