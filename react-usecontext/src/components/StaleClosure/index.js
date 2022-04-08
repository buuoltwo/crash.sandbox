/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2022-04-08 16:33:50
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-08 17:54:30
 */
import react, { useState, useRef, useEffect } from "react";

export default function StaleClosure() {

    let [count, setCount] = useState(0)
    const countRef = useRef(null)

    console.log(`re-render?`)
    useEffect(() => {
        const intervalId = setInterval(() => {

            // if (count >= 10) return  //无法拦截,count永远是初始值
            if (countRef.current >= 10) return   //可以拦截
            console.log(`comparison`, count, countRef.current)
            // setCount(count + 1)
            // setCount(count++)
            setCount(state => state + 1)
            countRef.current = countRef.current + 1
            // setCount(countRef.current)
        }, 500)
        return () => clearInterval(intervalId)
    }, [])
    return <span style={{ fontSize: 50 }}>{count}</span>
}