//Cash out button
document
  .getElementById("btn-show-cashOut")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.remove("hidden");
  });

//add money button
document
  .getElementById("btn-show-addMoney")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");

    document.getElementById("cash-out-form").classList.add("hidden");
  });
