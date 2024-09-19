document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "../index.html";
});



//Add money

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let pinNumber = document.getElementById("pin-number").value;
    if (pinNumber === "1234") {
      let balance = document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(balance);

      let addBalance = document.getElementById("enter-amount").value;
      addBalance = parseFloat(addBalance);
      const newBalance = balanceNumber + addBalance;
      document.getElementById("account-balance").innerText = newBalance;

      document.getElementById("enter-amount").value = "";
      document.getElementById("pin-number").value = "";
    } else {
      alert("Failed Add Money ! Please type a valid PIN number");
    }
  });

//Cash Out

document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pinNumber = document.getElementById("cashOut-pin").value;

    if (pinNumber === "1234") {
      let balance = document.getElementById("account-balance").innerText;
      balance = parseFloat(balance);
      let cashOutAmount = document.getElementById("cashOut-amount").value;
      cashOutAmount = parseFloat(cashOutAmount);
      const newBalance = balance - cashOutAmount;

      document.getElementById("account-balance").innerText = newBalance;

      document.getElementById("cashOut-amount").value = "";
      document.getElementById("cashOut-pin").value = "";
    } else {
      alert("Failed Cash out ! Please type a valid PIN number");
    }
  });
