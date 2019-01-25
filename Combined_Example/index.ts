const taskTemplate = document.createElement('template');
taskTemplate.innerHTML = `
<style>
.task {
    color: red;
}
</style>
<span class="toggle-task"><span class="status"></span></span>
<slot class="task" name="title"></slot>`;
class TaskComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot!.appendChild(taskTemplate.content.cloneNode(true));
    }
    this.render();
  } // ...
  render() {
    const statusElem: any = this.shadowRoot!.querySelector('.status')!;
    statusElem.style.display =
      this.getAttribute('status') === 'open' ? 'inherit' : 'none';
  }
}
customElements.define('app-task', TaskComponent);
