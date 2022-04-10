/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2022-04-10 14:51:06
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-10 15:45:47
 */
import { useEffect, useState } from 'react';

const useWait = (interval = 3) => {
    const [isWait, setisWait] = useState(true)

    useEffect(() => {
        const id = setTimeout(() => {
            setisWait(false)
        }, interval * 1000)

        return () => clearInterval(id)
    }, [])

    return isWait
}

export default useWait