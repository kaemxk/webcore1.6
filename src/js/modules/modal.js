export default class Modal {
  constructor(trigger, modal, closeTrigger, background) {
    this.trigger = document.querySelectorAll(trigger)
    this.modal = document.querySelector(modal)
    this.closeTrigger = this.modal.querySelector(closeTrigger)
    this.bg = this.modal.querySelector(background)
    this.body = document.body
  }

  addTriggers() {
    console.log('add triggers')
    this.trigger.forEach(i => {
      i.addEventListener('click', () => {
        this.openModal()
      })
    })

    this.closeTrigger.addEventListener('click', () => {
      this.closeModal()
    })

    this.bg.addEventListener('click', () => {
      this.closeModal()
    })
  }

  openModal() {
    console.log('open')
    this.modal.classList.add('modal--active')
    this.body.style.overflow = 'hidden'
  }

  closeModal() {
    console.log('close')
    this.modal.classList.remove('modal--active')
    this.body.style.overflow = ''
  }

  init() {
    console.log('init')
    this.addTriggers()
  }
}
