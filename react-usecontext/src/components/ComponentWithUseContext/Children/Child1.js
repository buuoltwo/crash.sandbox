/*
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-30 09:49:30
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-10-08 14:30:48
 */
import Child2 from './Child2'
import { useEffect } from 'react'

export default function Child1({ count }) {
  useEffect(() => {
    console.log(`main contents..`)
    return () => {
      console.log(4399)
    }
  }, [count])
  return (
    <div className="child-box-1">
      <Child2></Child2>
      <b>ParentProps Count is: {count}</b>
    </div>
  )
}
