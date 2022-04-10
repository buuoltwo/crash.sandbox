/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2022-04-10 14:48:07
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-10 16:07:24
 */

// import useWait from '../../common/hooks/useWait'
// import useLocalStorage from '../../common/hooks/useLocalStorage'
// import useInterval from '../../common/hooks/useInterval'
import useToggle from '../../common/hooks/useToggle'
import React, { useEffect, useState } from 'react'

const Index = () => {

    // return <Wait placeholder="waiting.." ui={<p>UI</p>}></Wait>

    //2. useLocalStorage
    // const [value, setValue] = useLocalStorage("name", "Bob")
    // return <>
    //     <label for="name">name</label>
    //     <input id="name" onChange={e => { setValue('name', e.target.value) }} value={value}></input>
    //     <p>{value}</p>
    // </>

    //3.
    // const cb = async () => {
    //     console.log(10)
    // }
    // useInterval(cb, 3)
    // return 1

    //4.
    const [state, toggle] = useToggle()
    return <>
        <button onClick={toggle}>toggle:{state.toString()}</button>
        <User state={state}></User>
    </>
}

// function Wait({ delay = 5, placeholder, ui }) {
//     // 1. useWait
//     const isWait = useWait(delay)
//     return isWait ? placeholder : ui
// }

function User({ state }) {
    useEffect(() => {
        console.log(`Effect in User-${state}`)
        return () => {
            console.log(`clean side Effect in User-${state}`)
        }
    }, [state])
    return state ? 1 : 0
}
export default Index