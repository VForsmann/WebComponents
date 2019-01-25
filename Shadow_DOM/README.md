# Shadow DOM

This is the superordinate term when using a `Shadow Tree, Shadow Host, Shadow Root, Slots` and the `Light Tree`.

## Shadow Tree

- hidden DOM-Tree, assigned to an DOM-Element
  - This Element is called Shadow-Host
  - The DOM Tree from the Shadow-Host is called Light Tree
  - The Shadow Host can be an Element of an Shadow Tree: `nesting` is
    possible
  - The first Element of the DOM-Tree is called Shadow Root
- encapsulation of CSS-Rules
  - CSS-Rules from outside the Shadow Tree doesnt effect any styling inside
  - And the other way around
- Child Elements of the Shadow Host are ignored
  - `Slots` dont get ignored (later)

## Creation and Access

Create a Shadow-Tree

```ts
let shadowRoot = shadowHost.attachShadow({ mode: 'open' });
```

- The mode changes access possibility from outside the Shadow Tree
- Should be true - there are no Security Issues here
- You can now use `appendChild()` to build up your Shadow-Tree

## Access Shadow-Tree from outside

Use the property shadowRoot

```ts
document.getElementById('shadow-host').shadowRoot
```

- Content is a Shadow-Root Object
- ShadowRoot is a Subinterface of `DocumentFragment`

