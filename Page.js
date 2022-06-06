/*
    Here are all the reuable modules for the page
*/

//Alert Module
class Page extends HTMLElement {
  connectedCallback() {
    var image = this.attributes.image.value;
    var icon = this.attributes.icon.value;
    
    this.innerHTML = `
    <section class="page_container">
    <div class="page_alert">
      <div class="page_alert_box">
        <img class="x_icon" src="${icon}" />
        <button type="button" class="reset_button">reset</button>
        <h1 class="page_alert_box_h">Alert!</h1>
        <p class="page_alert_box_p">
          You have clicked this button
          <b><span class="count"></span> times</b>
        </p>
      </div>
    </div>
    <img class="page_image" src="${image}" />
    <div class="page_second_div">
      <h1 class="page_title">Lorem ipsum</h1>
      <p class="page_paragraph">
        Infinitely scalable, feature-rich and cloud-native data management and
        protection for modern and legacy infrastructures and SaaS platforms,
        managed via a single app with no hardware required.
      </p>
      <button class="show_popup" id="btn_popup">Button</button>
    </div>
  </section>`;
  }
}

customElements.define("app-page", Page);
