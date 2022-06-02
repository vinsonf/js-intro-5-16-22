class HomePageComponent extends HTMLElement {
    connectedCallback() {
      console.log("I am connecting");
      this.innerHTML = `
      <my-nav></my-nav>
      <h1>Hello world</h1>
      `;
    }
    
    disconnectedCallback() {
      console.log("I am leaving");
    }
  }

  customElements.define('my-homepage', HomePageComponent);