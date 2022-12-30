import './scss'

import showMore from './modules/showMore'
import burgerMenu from './modules/burgerMenu'
import modal from './modules/modal'

import Swiper, { Pagination } from 'swiper'
// import Swiper styles

document.addEventListener('DOMContentLoaded', () => {
  new modal(
    '.modal-message-open',
    '.modal--message',
    '.modal__close',
    '.modal__bg'
  ).init()

  new modal(
    '.phone-btn',
    '.modal--phone',
    '.modal__close',
    '.modal__bg'
  ).init()

  new showMore(
    '.brands__show-more',
    '.brand-item--hidden',
    'brand-item--hidden'
  ).init()
  new showMore(
    '.technics__show-more',
    '.technics-item--hidden',
    'technics-item--hidden'
  ).init()
  new burgerMenu(
    '.header__aside-btn',
    '.aside',
    '.aside__close',
    '.aside__bg'
  ).init()

  const brandSwiper = new Swiper('.swiper-brands', {
    modules: [Pagination],

    pagination: {
      el: '.swiper-pagination--brands'
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      485: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 40,
        enabled: true
      },
      1100: {
        slidesPerView: 'auto',
        enabled: false
      }
    }
  })

  const technicsSwiper = new Swiper('.swiper-technics', {
    modules: [Pagination],

    pagination: {
      el: '.swiper-pagination-technics'
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      560: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 40,
        enabled: true
      },
      1100: {
        slidesPerView: 'auto',
        enabled: false
      }
    }
  })

  const pricesSwiper = new Swiper('.swiper-prices', {
    modules: [Pagination],

    pagination: {
      el: '.swiper-pagination-prices'
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      560: {
        slidesPerView: 1,
        spaceBetween: 30,
        enabled: true
      },
      768: {
        slidesPerView: 0,
        spaceBetween: 0,
        enabled: false
      }
    }
  })

  const longSwiper = new Swiper('.swiper-long', {
    effect: 'fade',

    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10
      },
      380: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      490: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      560: {
        slidesPerView: 2.3,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1050: {
        slidesPerView: 4,
        enabled: true,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 5,
        enabled: false,
        spaceBetween: 10
      },
      1366: {
        slidesPerView: 4,
        enabled: true,
        spaceBetween: 10
      }
    }
  })
})
