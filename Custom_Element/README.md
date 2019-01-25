# Custom Elements

With Custom-Elements you can create own HTML-/DOM Elements
You can either use them in HTML or create them directly in JS

```html
<ol class="tasks">
  <app-task title="Learn Redux" status="done"></app-task>
  <app-task title="Learn Web-Components" status="open"></app-task>
</ol>
```

## Types

- Autonomous Custom Elements
  - Identified as Subclass of `HTMLElement`
  - Own a Elementname (must have a hyphen in the name)
- Customized Built-In Elements
  - Are Subclass of specific Elementclass (e.g. `HTMLButtonElement`)
  - Do not have a own Elementname, differented by is-Attribute

```html
<button is="special-button">Click Me!</button>
```

## Custom Element Class

- Constructor
  - Class must have a Constructor, calling `super()`
  - Here you are not allowed to read Childelements/attributes
  - You can create defaults, register Listener and initilise a shadow root here
- Initilisation should be in `connectedCallback`
  - Here you can define the Elements content
  - BUT: Care, it can be called more than once
- Clean up in `disconnectedCallback`
- Register the class about customElements.define

```ts
class TaskComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const title = this.getAttribute('title'); // ...
    this.innerHTML = `
        <style><!-- ... --></style>
        <li class="task">
        <span class="toggle-task">
        ${status === 'done' ? `<span class="status"></span>` : ''}
        </span>
        <span class="title">${title}</span>
        </li>`;
  }
}
customElements.define('app-task', TaskComponent);
```

## Custom Elements Lifecycle

- `connectedCallback`
  - Called when Element is added to DOM, or moved in DOM
- `disconnectedCallback`
  - Called when Element got deleted, or moved in DOM
- `adoptedCallback`
  - Called when Element gets assigned to new Document
- `attributeChangedCallback`
  - Called when Attribute added, changed or removed from the Element
  - You need to define the Attributes over `observedAttributes`

```ts
class TaskComponent extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ['status', 'title'];
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    this.render();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    /* ... */
  }
}
```
