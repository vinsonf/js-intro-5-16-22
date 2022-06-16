customElements.define('app-nav', 
class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
          a {
            color: red;
          }
          p {
            color: blue;
          }
        </style>
        <div>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>

        </div>
  
        `;

        this.shadowRoot.querySelectorAll('a')[0].addEventListener('click', (e) => {
            document.querySelector('div').innerHTML = '<app-home></app-home>';

        })
        this.shadowRoot.querySelectorAll('a')[1].addEventListener('click', (e) => {
            document.querySelector('div').innerHTML = '<app-about></app-about>';

        });
        this.shadowRoot.querySelectorAll('a')[2].addEventListener('click', (e) => {
            document.querySelector('div').innerHTML = '<app-contact></app-contact>';

        });
        this.shadowRoot.querySelectorAll('a')[0].style.color = 'blue';
    }
});
