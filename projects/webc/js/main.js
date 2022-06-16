
customElements.define('app-home', 
class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <div>
        <h1>Welcome to my website</h1>
        <p>This is a website that I made to learn how to use custom elements</p>
        </div>
  
        `
    }
});
customElements.define('app-about', 
class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <div>
        <h1>Something about this site</h1>

        </div>
  
        `
    }
});
customElements.define('app-contact', 
class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            body {
                background-color: #f5f5f5;
            }
            h1{
                text-align: center;
            }
        </style>
        <div>
        <h1>Contact</h1>

        </div>
  
        `
    }
connectedCallback() {
    console.log('connected');
   
}
});

