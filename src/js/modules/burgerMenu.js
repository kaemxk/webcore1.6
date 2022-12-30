export default class BurgerMenu {
  constructor(trigger, menu, close, background) {
    this.trigger = document.querySelector(trigger)
    this.menu = document.querySelector(menu)
    this.close = document.querySelector(close)
    this.bg = document.querySelector(background)
    this.message = this.menu.querySelector('.aside__message')
    this.phone = this.menu.querySelector('.aside__phone-btn')
    this.body = document.body
  }

  addTriggers() {
    this.trigger.addEventListener('click', () => {
      this.openMenu()
    })

    this.close.addEventListener('click', () => {
      this.closeMenu()
    })

    this.bg.addEventListener('click', () => {
      this.closeMenu()
    })

    this.message.addEventListener('click', () => {
      this.closeMenu()
    })
  }

  openMenu() {
    this.menu.classList.add('aside--active')
    this.bg.classList.add('aside__bg--active')
    this.body.style.overflow = 'hidden'
  }

  closeMenu() {
    this.menu.classList.remove('aside--active')
    this.bg.classList.remove('aside__bg--active')
    this.body.style.overflow = ''
  }

  init() {
    this.addTriggers()
  }
}
