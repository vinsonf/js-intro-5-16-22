class NavComponent extends HTMLElement {
    connectedCallback() {
      console.log("I am connecting");
      this.innerHTML = `
      <div id="nav">
        <style>
       #nav h3 {
            color: red;
        }
        
        </style>
        <h3>Navigation</h3>
      </div>
 
      
      `;
    }
    
    disconnectedCallback() {
      console.log("I am leaving");
    }
  }

  customElements.define('my-nav', NavComponent);