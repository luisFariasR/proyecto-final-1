const mortgageAmount = document.querySelector(`#mortgageAmount`);
const interestRate = document.querySelector(`#interestRate`);
const mortgageTerm = document.querySelector(`#mortgageTerm`);
const yearsSpan = document.querySelector(`.yearsSpan`);
const years = document.querySelector(`#years`);
const alertRate = document.querySelector(`#alertRate`);
const percentageSpan = document.querySelector(`#percentageSpan`);
const alertAmount = document.querySelector(`#alertAmount`);
const typeAlert = document.querySelector(`#typeAlert`);
const spanEuro = document.querySelector(`#spanEuro`);
const calcBtn = document.querySelector(`.calcBtn`);
const clear = document.querySelector(`#clear`);
const darkBox = document.querySelector(`.darkBox`);
const yourResults = document.querySelector(`.yourResults`);
const repaymentSelected = document.querySelector(`#repaymentSelected`);
const interestOnly = document.querySelector(`#interestOnly`);
const monthlyRepayment = document.querySelector(`#monthlyRepayment`);
const numResult = document.querySelector(`.numResult`);
const card = document.querySelector(`.card`);

function compute() {
  let r = getInterest();
  let n = getTerm();
  let p = getAmount();
  let numerador = p * r * (1 + r) ** n;
  let denominador = (1 + r) ** n - 1;
  let res = (numerador / denominador).toFixed(2);
  return res;

}

calcBtn.addEventListener("click", () => {
  const track = compute();
  if (repaymentSelected.checked) {
    card.innerHTML = "";
    
    const result = `
              <div class="numResult">
                <h5>Your monthly repayments</h5>
                <h1 id="monthlyRepayment">£${track}</h1>
              </div>
              <hr class="hr" />
              <div class="last">
                <h5>Total you'll repay over the term</h5>
                <h2>$${(track * getTerm()).toFixed(2)}</h2>
            
            </div>`;
    card.innerHTML = result;

    showResults();
    typeAlert.classList.add(`d-none`);
  } else if (interestOnly.checked) {
    card.innerHTML = "";
    typeAlert.classList.add(`d-none`);
    const intereses = getOnlyInterest();
    const iteresesPorMes = getMonthInterest();
    card.innerHTML = `
              <div class="numResult">
                <h5>Your monthly repayments</h5>
                <h1 id="monthlyRepayment">£${iteresesPorMes.toFixed(2)}</h1>
              </div>
              <hr class="hr" />
              <div class="last">
                <h5>Total you'll repay over the term</h5>
                <h4>£${intereses.toFixed(2)}</h4>
                          </div>`;

    showResults();
  } else {
    typeAlert.classList.remove(`d-none`);
  }
});

function getTerm() {
  let getRes = parseInt(mortgageTerm.value);
  if (!isNaN(getRes) && getRes > 0) {
    years.classList.remove(`bg-danger`);
    mortgageTerm.classList.remove(`border-danger`);
    yearsSpan.classList.add(`d-none`);
    return getRes * 12;
  } else {
    years.classList.remove(`bg-primary-subtle`);
    years.classList.add(`bg-danger`);
    mortgageTerm.classList.add(`border-danger`);
    yearsSpan.classList.remove(`d-none`);
    return null;
  }
}
function getOnlyInterest() {
  let onlyinterest = (compute() * getTerm()) - getAmount();
  return onlyinterest;
}
function getMonthInterest() {
  let monthlyInterest = getOnlyInterest() / getTerm();
  return monthlyInterest;
}

function getInterest() {
  if (!isNaN(interestRate.value) && interestRate.value > 0) {
    percentageSpan.classList.remove(`bg-danger`);
    interestRate.classList.remove(`border-danger`);
    alertRate.classList.add(`d-none`);
    return interestRate.value / 100 / 12;
  } else {
    percentageSpan.classList.remove(`bg-primary-subtle`);
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
    spanEuro.classList.remove(`bg-primary-subtle`);
    spanEuro.classList.add(`bg-danger`);
    mortgageAmount.classList.add(`border-danger`);
    alertAmount.classList.remove(`d-none`);
    return null;
  }
}
function showResults() {
  const amount = getAmount();
  const interest = getInterest();
  const term = getTerm();

  if (
    amount !== null &&
    !isNaN(amount) &&
    interest !== null &&
    !isNaN(interest) &&
    term !== null &&
    !isNaN(term)
  ) {
    darkBox.classList.add(`d-none`);
    yourResults.classList.remove(`d-none`);
  }
}
