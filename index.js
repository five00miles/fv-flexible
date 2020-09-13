(function flexible(window, lib) {
  const docEl = document.documentElement
  const dpr = window.devicePixelRatio || 1
  const flexible = lib.flexible || (lib.flexible = {})

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    const rem = docEl.clientWidth / 7.5
    docEl.style.fontSize = rem + 'px'
    flexible.rem = rem
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }

  flexible.setRemUnit = setRemUnit
  flexible.rem2px = function(d) {
    let val = parseFloat(d) * this.rem
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px'
    }
    return val
  }
  flexible.px2rem = function(d) {
    let val = parseFloat(d) / this.rem
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem'
    }
    return val
  }
}(window, window.lib || (window.lib = {})))
