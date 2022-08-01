export const breakpointTablet = window.matchMedia('(min-width:768px)')

// breakpoint where swiper will be destroyed
// keep track of swiper instances to destroy later
let brandsSwiper
let serviceSwiper
let repairSwiper

const breakpointChecker = function () {
  // if larger viewport and multi-row layout needed
  if (breakpointTablet.matches) {
    // clean up old instances and inline styles when available
    if (brandsSwiper !== undefined) brandsSwiper.destroy(true, true)
    if (serviceSwiper !== undefined) serviceSwiper.destroy(true, true)
    // or/and do nothing
    return
    // else if a small viewport
  } else if (!breakpointTablet.matches) {
    // fire small viewport version of swiper
    return enableSwiper()
  }
}

const enableSwiper = function () {
  serviceSwiper = new Swiper('.services__service', {
    slidesPerView: 'auto',

    spaceBetween: 16,
    keyboardControl: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  brandsSwiper = new Swiper('.repair-block__items', {
    slidesPerView: 'auto',

    spaceBetween: 16,
    keyboardControl: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  repairSwiper = new Swiper('.repair-type__items', {
    slidesPerView: 'auto',

    spaceBetween: 16,
    keyboardControl: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

// keep an eye on viewport size changes
breakpointTablet.addListener(breakpointChecker)
// kickstart
breakpointChecker()