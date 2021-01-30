/**
 * 从lib-flexible改过来的，https://github.com/amfe/lib-flexible
 * 设计尺寸默认以750为准
*/
;(function(window, lib) {
	const docEl = document.documentElement
	const dpr = window.devicePixelRatio || 1
	let flexible = lib.flexible || (lib.flexible = {})
	flexible.lock = false // 是否锁住最宽的宽度，不会无限宽度自适应，默认是150*7.5 px
	flexible.lockWidth = 150

	// set 1rem = viewWidth / 10
	function setRemUnit() {
		let rem = docEl.clientWidth / 7.5
		if (flexible.lock && rem > flexible.lockWidth) rem = flexible.lockWidth
		docEl.style.fontSize = rem + 'px'
		flexible.fontSize = rem
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
})(window, window.lib || (window.lib = {}))
