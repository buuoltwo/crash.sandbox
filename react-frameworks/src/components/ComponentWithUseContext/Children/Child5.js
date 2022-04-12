/*
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-30 09:49:30
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-09-30 11:35:49
 */

import { useContext } from 'react'
import { CountContext } from '../Parent'

export default function Child5() {
  const [count, setCount] = useContext(CountContext)
  return (
    <div className="child-box-5">
      <b>CountContext count is: {count}</b>
      <div>
        <button onClick={() => setCount(0)}>Click ME to Reset </button>
      </div>
    </div>
  )
}
