/*
    Reusable modules / components
*/

//Page Module
class Page extends HTMLElement {
  connectedCallback() {
    var image = this.attributes.image.value;
    var icon = this.attributes.icon.value;
    
    this.innerHTML = `
    <section class="page_container">
    <section class="page_alert">
      <section class="page_alert_box">
        <img class="x_icon" src="${icon}" alt="cancel icon"/>
        <h1 class="page_alert_box_h">Alert!</h1>
        <p class="page_alert_box_p">
        You have clicked <b><span class="count"></span> times</b> to related button.
        </p>
        <button type="button" class="reset_button">Reset Count</button>
      </section>
    </section>
    <img class="page_image" src="${image}" alt="Beach Image"/>
    <section class="page_second_div">
      <h1 class="page_title">Lorem ipsum</h1>
      <p class="page_paragraph">
        Infinitely scalable, feature-rich and cloud-native data management and
        protection for modern and legacy infrastructures and SaaS platforms,
        managed via a single app with no hardware required.
      </p>
      <button class="show_popup" id="btn_popup">Button</button>
    </section>
  </section>`;
  }
}

customElements.define("app-page", Page);
