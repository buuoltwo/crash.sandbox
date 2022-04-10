/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2022-04-10 15:36:35
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-10 15:43:04
 */
import { useEffect, useRef } from 'react'
const useInterval = (cb, interval = 10) => {
    const callback = useRef(null)

    useEffect(() => {
        callback.current = cb
    })

    useEffect(() => {
        let timer = setInterval(callback.current, 1000 * interval)
        return () => clearInterval(timer)
    })
}
export default useInterval