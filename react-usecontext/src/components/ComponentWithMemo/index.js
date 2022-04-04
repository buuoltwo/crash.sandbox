/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2022-04-04 15:52:21
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-04 16:51:29
 */
import React, { useEffect, useState, memo } from 'react'
import Swatch from './Swatch'
const T = memo(Swatch)
export default function ComponentWithMemo() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('red')

    console.log(`App rendered: ${count}`)
    const countAppRendered = () => setCount(count + 1)

    useEffect(() => {
        return () => {
            setCount(0)
            setColor('red')
        }
    }, [])
    return (
        <>
            <h1>{count}</h1>
            <div>
                <button style={{ margin: 5 }} onClick={countAppRendered}>Re-Render App</button>
                <button onClick={() => {
                    countAppRendered()
                    setColor(color === 'red' ? 'blue' : 'red')
                }}>Change Color</button>
            </div>
            <T color={color}></T>
            {/* <Swatch color={color}></Swatch> */}
        </>
    )
}
