//main method to run the entire app
const main = (() => {
  //query tags
  const btn = document.querySelector("#btn_popup");
  const close = document.querySelector(".x_icon");
  const alert = document.querySelector(".page_alert");
  const count = document.querySelector(".count");
  const resetb = document.querySelector(".reset_button");

  window.localStorage.setItem("count", 1);
  var storeAmount = window.localStorage.getItem("count");

  //function to open the alert page
  const openAlertMenu = () => {
    //add a style to the alert display
    alert.style.display = "flex";

    //check id the count is greater 5
    if (storeAmount >= 5) {
      //show reset botton
      resetb.style.display = "flex";
    }
    {
      count.textContent = `${storeAmount}`;
      window.localStorage.setItem("count", storeAmount);
      //increment the amount
      storeAmount = Number(window.localStorage.getItem("count")) + 1;
    }
  };

  //function to close the alert page
  const closeAlertMenu = () => {
    alert.style.display = "none";
    alert_p.textContent = `You have clicked this button ${storeAmount} times`;
  };

  //function to reset the counternam
  resetb.addEventListener("click", () => {
    window.localStorage.clear();
    resetb.style.display = "none";
    storeAmount = window.localStorage.setItem("count", 1);
    alert_p.textContent = `You have clicked this button ${storeAmount} times`;

  });

  //added click event to the button to open alert
  btn.addEventListener("click", openAlertMenu);
  //added click event to the icon to close alert
  close.addEventListener("click", closeAlertMenu);

  alert.addEventListener("click", closeAlertMenu);
})();
