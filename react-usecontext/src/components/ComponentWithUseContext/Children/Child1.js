/*
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-30 09:49:30
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-09-30 10:52:48
 */
import Child2 from './Child2'
export default function Child1({ count }) {
  return (
    <div className="child-box-1">
      <Child2></Child2>
      <span>{count}</span>
    </div>
  )
}
