export default class ShowMore {
  constructor(trigger, hiddenContent, hiddenClass) {
    this.trigger = document.querySelector(trigger)
    this.hiddenContent = document.querySelectorAll(hiddenContent)
    this.class = hiddenClass
  }

  addTrigger() {
    this.trigger.addEventListener('click', () => {
      this.showContent()
    })
  }

  showContent() {
    console.log(this.class)
    this.hiddenContent.forEach((item) =>
      item.classList.remove(this.class)
    )
    this.trigger.remove()
  }

  init() {
    this.addTrigger()
  }
}
