class ArcButtonNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    div></div>
            <div>
                <div><img src="" alt=""></div>
                <div></div>
            </div>
            <div>
                <div><img src="" alt=""></div>
                <div></div>
            </div>
            <div>
                <div><img src="" alt=""></div>
                <div></div>
            </div>
            <div>
                <div><img src="" alt=""></div>
                <div></div>
            </div>
        </header>


    `;
  }
}

customElements.define('arc-button-nav', ArcButtonNav);

