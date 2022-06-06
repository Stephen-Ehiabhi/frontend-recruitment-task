//main method to run the entire app
const main = (() => {
  //get all the html elements
  const btn = document.querySelector("#btn_popup");
  const close = document.querySelector(".x_icon");
  const alert = document.querySelector(".page_alert");
  const count = document.querySelector(".count");
  const resetb = document.querySelector(".reset_button");

  //get the value in local storage
  var storeAmount = Number(window.localStorage.getItem("count"));

  //function to open the alert page
  const openAlertMenu = () => {
    //add a style to the alert display
    alert.style.display = "flex";

    console.log(storeAmount);
    //increment the amount
    storeAmount = Number(window.localStorage.getItem("count")) + 1;
    //store the count in local-storage
    window.localStorage.setItem("count", storeAmount.toString());
    //load the count val in the html
    count.textContent = `${storeAmount}`;

    //show reset button logic passes
    if (storeAmount >= 5) resetb.style.display = "flex"; //show reset botton
    console.log(storeAmount);
  };

  //function to close the alert page
  const closeAlertMenu = () => {
    alert.style.display = "none";
  };

  //function to reset the counter
  resetb.addEventListener("click", () => {
    storeAmount = 0;
    window.localStorage.removeItem("count");
    resetb.style.display = "none";
    window.localStorage.setItem("count", 0);
  });

  //added click event to the button to open alert
  btn.addEventListener("click", openAlertMenu);
  //added click event to the icon to close alert
  close.addEventListener("click", closeAlertMenu);
  //added click event to the body to close alert
  alert.addEventListener("click", closeAlertMenu);
})();
