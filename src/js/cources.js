(function() {
  const video = document.querySelector('.cources__video')

  if (video) {
    const player = videojs(video)
    const container = document.querySelector('.cources__container')
    const target = document.querySelector('.cources__target')
    const positionTargetX = (container.offsetWidth / 2) - (target.offsetWidth / 2 - target.offsetWidth / 2)
    const positionTargetY = (container.offsetHeight / 2) - (target.offsetHeight / 2 - target.offsetHeight / 2)

    gsap.set(target, {
      x: positionTargetX,
      y: positionTargetY,
    })

    container.addEventListener('mousemove', (e) => {
      const rect = e.target.getBoundingClientRect()
      let x = e.clientX - rect.left
      let y = e.clientY - rect.top
      let rightBorder = container.offsetWidth - (target.offsetWidth / 2 - target.offsetWidth / 2)
      let bottomBorder = container.offsetHeight - (target.offsetHeight / 2 - target.offsetHeight / 2)

      if (x < 0) {
        x = 0
      }

      if (x > rightBorder) {
        x = rightBorder
      }

      if (y < 0) {
        y = 0
      }

      if (y > bottomBorder) {
        y = bottomBorder
      }

      gsap.to(target, {
        x,
        y,
        duration: 0.35
      })
    })

    container.addEventListener('mouseleave', (e) => {
      let x = (container.offsetWidth / 2) - (target.offsetWidth / 2 - target.offsetWidth / 2)
      let y = (container.offsetHeight / 2) - (target.offsetHeight / 2 - target.offsetHeight / 2)

      gsap.to(target, {
        x,
        y,
        duration: 0.7
      })
    })

    container.addEventListener('click', () => {
      container.classList.toggle('cources__container--active')
    })
  }
})();
(function() {
  const video = document.querySelector('.program__video')

  if (video) {
    const player = videojs(video)
    const container = document.querySelector('.program__container')
    const target = document.querySelector('.program__target')
    const positionTargetX = (container.offsetWidth / 2) - (target.offsetWidth / 2 - target.offsetWidth / 2)
    const positionTargetY = (container.offsetHeight / 2) - (target.offsetHeight / 2 - target.offsetHeight / 2)

    gsap.set(target, {
      x: positionTargetX,
      y: positionTargetY,
    })

    container.addEventListener('mousemove', (e) => {
      const rect = e.target.getBoundingClientRect()
      let x = e.clientX - rect.left
      let y = e.clientY - rect.top
      let rightBorder = container.offsetWidth - (target.offsetWidth / 2 - target.offsetWidth / 2)
      let bottomBorder = container.offsetHeight - (target.offsetHeight / 2 - target.offsetHeight / 2)

      if (x < 0) {
        x = 0
      }

      if (x > rightBorder) {
        x = rightBorder
      }

      if (y < 0) {
        y = 0
      }

      if (y > bottomBorder) {
        y = bottomBorder
      }

      gsap.to(target, {
        x,
        y,
        duration: 0.35
      })
    })

    container.addEventListener('mouseleave', (e) => {
      let x = (container.offsetWidth / 2) - (target.offsetWidth / 2 - target.offsetWidth / 2)
      let y = (container.offsetHeight / 2) - (target.offsetHeight / 2 - target.offsetHeight / 2)

      gsap.to(target, {
        x,
        y,
        duration: 0.7
      })
    })

    container.addEventListener('click', () => {
      container.classList.toggle('program__container--active')
    })
  }
})();
