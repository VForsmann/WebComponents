document.getElementById('myButton').onclick = () => {
  let shadowHost: HTMLElement = document.getElementById('shadow-host')!;
  let shadowRoot = shadowHost.attachShadow({ mode: 'open' });
  let styleElem = document.createElement('style');
  styleElem.innerHTML = 'p { color: red}';
  let pElem = document.createElement('p');
  pElem.innerHTML = '<p>Inhalt des Shadow Tree</p>';
  // Standardconform because shadowRoot is a Subclass of DocumentFragment
  shadowRoot.appendChild(styleElem);
  shadowRoot.appendChild(pElem);
};
