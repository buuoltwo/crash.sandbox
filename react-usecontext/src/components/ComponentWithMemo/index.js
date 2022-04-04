/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2022-04-04 15:52:21
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-04 23:30:14
 */
import React, { useEffect, useState, memo, useMemo, useCallback } from 'react'
import Swatch from './Swatch'

const T = memo(Swatch)
// const T = memo(Swatch, (prevProps, nextProps) => {
//     return prevProps.params.color === nextProps.params.color
// })
// codes above equals to:
// const T = (props) => {
//     return React.useMemo(() => {
//         return <Swatch {...props}></Swatch>
//     }, [props.params.color])
// }

export default function ComponentWithMemo() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('red')

    console.log(`App rendered: ${count}`)
    const countAppRendered = () => setCount(count + 1)

    // useMemo
    let params = useMemo(() => ({ color }), [color])
    // useCallback
    let handleClick = useCallback(() => { console.log('create this function only once .') }, [])
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
            <T params={params} handleClick={handleClick}></T>
            {/* <T params={{ color }}></T> */}
            {/* <Swatch color={color}></Swatch> */}
        </>
    )
}
