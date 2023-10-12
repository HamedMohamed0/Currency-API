let inp = document.querySelector("form input");
let btn = document.querySelector("form button");
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=cf5b390786dd4b8483ad1a1fcce143f3"
)
  .then((res) => {
    let data = res.json();
    return data;
  })
  .then((currency) => {
    let allCurrency = Object.keys(currency.rates);
    btn.addEventListener("click", () => {
      allCurrency.forEach((cur) => {
        let div = document.createElement("div");
        div.innerHTML = `Price in ${cur} = <span> ${(
          currency.rates[cur] * inp.value
        ).toFixed(2)}`;
        let fatherDiv = document.querySelector(".currencys");
        fatherDiv.appendChild(div);
      });
    });
  });

let scorllEle = document.querySelector(".scroll-progress");


window.addEventListener("scroll", () => {
  let scorllTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log(`${(scorllTop / height) * 100}%`)
  scorllEle.style.width = `${(scorllTop / height) * 100}%`;
});
