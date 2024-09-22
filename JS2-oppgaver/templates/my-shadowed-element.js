class MyShadowedElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        p { color: blue; }
      <\/style>
      <p>Hello, Shadow DOM!</p>
    `;
  }
}

customElements.define('my-shadowed-element', MyShadowedElement);

