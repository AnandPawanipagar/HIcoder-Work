let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let rates = document.getElementsByName("rate");
  // console.log(rates);
  rates.forEach((rate) => {
    // console.log(rate);
    if (rate.checked) {
      alert(`rate: ${rate.value}`);
    }
  });
});
//ForEach Method will be applicable for only Array.
// getElementsByName() is returing an array .
//inside rate, every itration value is storing and that is an object.
//checked, value are the keys for the input object here.
// The template litral eg `rate: ${rate.value}` is intoduced in ES6 which you can learn on this URL https://webapplog.com/es6/
