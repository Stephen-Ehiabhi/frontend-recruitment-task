//main method to run the entire app
const main = (() => {
  //query tags
  const btn = document.querySelector("#btn_popup");
  const close = document.querySelector(".x-icon");
  const alert = document.querySelector(".page_alert");

  //function to open the alert page
  const openAlertMenu = () => {
    alert.style.display = "flex";
    console.log("alertMenu");
  };

  //function to close the alert page
  const closeAlertMenu = () => {
    alert.style.display = "none";
    console.log("alertMenu");
  };

  //added click event to the button to open alert
  btn.addEventListener("click", openAlertMenu);
  //added click event to the icon to close alert
  close.addEventListener("click", closeAlertMenu);
})();
