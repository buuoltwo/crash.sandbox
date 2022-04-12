/*
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-29 10:54:34
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-09-30 11:10:22
 */

import { useState, createContext } from 'react'
import Child1 from './Children/Child1'

export const CountContext = createContext(0)

export default function Parent() {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={[count, setCount]}>
      <Child1 count={count}></Child1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </CountContext.Provider>
  )
}
