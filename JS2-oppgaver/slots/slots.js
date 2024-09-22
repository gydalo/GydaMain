class UserProfileCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <style>
        :host {
          display: block;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
          max-width: 300px;
        }
        ::slotted(h2) {
          color: #333;
          margin-top: 0;
        }
        ::slotted(p) {
          color: #666;
          font-size: 14px;
        }
      <\/style>
      <slot name="name"></slot>
      <slot name="bio"></slot>
    `;
  }
}

customElements.define('user-profile-card', UserProfileCard);

/*
When you create a custom element with a shadow DOM that includes slots, the ::slotted() pseudo-element allows you to apply styles to 
the elements that are projected into those slots. This is important because styles defined inside the shadow DOM generally do not affect 
the content passed into the slots, as that content technically resides in the light DOM.

How ::slotted() Works
Targeting Slotted Content: The ::slotted() pseudo-element is used within the shadow DOM's style rules to target the light DOM content 
that is inserted into the slot.

Selector: Inside the parentheses, you can specify a selector to match the projected elements, like ::slotted(p) to target <p> elements, 
or ::slotted(.class-name) to target elements with a specific class.


Testing:
Jest: A popular JavaScript testing framework that can be configured to work with Web Components, especially when used in conjunction with 
testing utilities like @testing-library/dom for more natural interaction testing.

Karma: A test runner that works well for running tests in real browsers, allowing you to ensure that your Web Components work correctly 
across different environments.

Testing styles and Accessibility
Visual Regression Testing: Tools like Percy or BackstopJS can take screenshots of your components in different states and compare them 
to baseline images to detect changes.

Accessibility (A11y) Testing: Tools like axe-core or Lighthouse can automate testing for common accessibility issues within your components.
*/
