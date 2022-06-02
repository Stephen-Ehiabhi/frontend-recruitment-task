//main method to run the entire app
const main = (() => {
  //query tags
  const btn = document.querySelector("#btn_popup");
  const close = document.querySelector(".x-icon");
  const alert = document.querySelector(".page_alert");
  const alert_p = document.querySelector(".page_alert_box_p");

  var storeAmount = 0;

  //function to open the alert page
  const openAlertMenu = () => {
    //add a style to the alert display
    alert.style.display = "flex";
    //increment the amount
    storeAmount += 1;
    //add the amount of clicks to the alert text
    alert_p.textContent = `You have clicked this button ${storeAmount} times`;
  };

  //function to close the alert page
  const closeAlertMenu = () => {
    alert.style.display = "none";
  };

  //added click event to the button to open alert
  btn.addEventListener("click", openAlertMenu);
  //added click event to the icon to close alert
  close.addEventListener("click", closeAlertMenu);
})();
