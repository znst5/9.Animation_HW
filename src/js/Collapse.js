export default class Collapse {
  constructor(container) {
    if (typeof container === 'string') {
      this.container = document.querySelector(container);
    } else {
      this.container = container;
    }

    this.init();
  }

  init() {
    this.button = this.container.querySelector('.collapse-btn');
    this.content = this.container.querySelector('.collapse-content');

    if (!this.button || !this.content) return;

    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    this.content.classList.toggle('show');
  }
}
