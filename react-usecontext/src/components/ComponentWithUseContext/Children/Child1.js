/*
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-30 09:49:30
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-09-30 11:34:51
 */
import Child2 from './Child2'
export default function Child1({ count }) {
  return (
    <div className="child-box-1">
      <Child2></Child2>
      <b>ParentProps Count is: {count}</b>
    </div>
  )
}
