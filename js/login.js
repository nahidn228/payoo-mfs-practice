//Login Page

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    if (phoneNumber === "018" && pinNumber === "1234") {
      window.location.href = "../home.html";
      console.log("button clicked");
    } else {
      alert("Wrong Phone number or Pin number");
    }
  });



