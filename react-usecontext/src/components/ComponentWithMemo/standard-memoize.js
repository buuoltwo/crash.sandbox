/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2022-04-05 11:47:07
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-09 01:42:43
 */
import _ from "lodash"
function Swatch(color) {
    console.log(`Swatch rendered ${color}`)
    return `Swatch ${color}`
}

// 标准memoize
const MemoedSwatch = _.memoize(Swatch)
// Swatch('red')
// Swatch('red')

// MemoedSwatch('red')
// MemoedSwatch('blue')
// MemoedSwatch('red')
// MemoedSwatch('blue')

// React: 对比前后props
let prev = {
    color: null,
    result: null
}
function rmSwatch(color) {
    if (prev.color === color) {
        return prev.result
    }
    prev.color = color
    prev.result = Swatch(color)
}

// rmSwatch('red')
// rmSwatch('blue')
// rmSwatch('red')
// rmSwatch('blue')

// rmSwatch('red')
// rmSwatch('red')
// rmSwatch('blue')
// rmSwatch('blue')