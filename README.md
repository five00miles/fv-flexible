## 根据lib-flexible作了一些整合
[lib-flexible](#https://github.com/amfe/lib-flexible)

## 在全局window下挂载了一个对象`window.lib.flexible`
```js
lock: false  // 是否锁住最大适配宽度 默认150*7.5px
lockWidth: 150
px2rem: ƒ (d) // px转成rem
fontSize: 103.86666666666666 // 输出当前html的fontSize
rem2px: ƒ (d)  // rem转px
setRemUnit: ƒ setRemUnit() // 执行一次设置html的fontSize
```