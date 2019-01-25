# HTML-Templates

HTML-Element for definition of HTML-Fragments which can be instantiated multiple times

## Specification

https://html.spec.whatwg.org/multipage/scripting.html#the-template-element

## Characteristics

- Content of template is generally ignored by browser
  - Its not part of the actual Document and its not visible
  - Ressources inside the html-template are ignored, and are not getting loaded (e.g. Images)
- Its getting described by a `DocumentFragment-Node` and is available over `template.content`
  - This node or its clone can be added to another actual Element in the Document
  - All child-nodes of the html-template Element will be added then
  - Now all Resources inside the template will be loaded
  - `template.content` can be cloned over and over with `.cloneNode(deep: boolean)`

Pro's:

- HTML-Fragments can be described in HTML
  - No String-Concatination needed here to avoid XSS
  - No manual construction of the Document e.g. by `Document.createElement(..)`
- Ressource-Loading only when Ressource-Using
- Template-Content doesnt need to be hidden manually
- Styling allowed in template-element: Allowed by default