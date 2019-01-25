class TaskComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    static get observedAttributes() {
        return ['status', 'title'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
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
