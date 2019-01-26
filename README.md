# WebComponents

Make reusage of components possible with new and basic HTML, CSS and JS Features

* HTML-Templates
* Custom Elements
* Shadow DOM

The general Idea is to combine this Features to create a standard conform and lightweight resolution to build components and reuse them.

In this Github Repository you will find examples for each part of WebComponents and a combined example.

# Browser Support

Modern Versions of Chrome, Safari and Firefox are supporting WebComponents

For older Browsers there are Polyfills to ES5:

`npm i @webcomponents/webcomponentsjs`

Place in index.html head (e.g.)

```html
<script src="node_modules/@webcomponents/webcomponentsjs/
custom-elements-es5-adapter.js"></script>
<script src="node_modules/@webcomponents/webcomponentsjs/
webcomponents-loader.js"></script>
```

Attention to Code:

After Creation of Template and Content:
```ts
const taskTemplate = document.createElement('template');
taskTemplate.innerHTML = `<!-- -->`;
(window as any).ShadyCSS
&&(window as any).ShadyCSS.prepareTemplate(taskTemplate, 'app-task');
```

Before Creation of Shadow Tree:

```ts
connectedCallback() {
(window as any).ShadyCSS &&(window as any).ShadyCSS.styleElement(this);
if (!this.shadowRoot) {
this.createShadowTree();
}
this.render();
}
```

These Problems are already solved in `lit-html` and `lit-element`

