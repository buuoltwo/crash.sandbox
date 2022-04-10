/*
* @Descripttion : 
* @Author       : zhangming
* @Date         : 2022-04-10 15:50:54
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-10 16:03:55
*/

import { useCallback, useState } from "react"
const useToggle = (initialValue = false) => {
    const [state, setState] = useState(initialValue)
    const toggle = useCallback(() => {
        setState(s => !s)
    }, [])
    return [state, toggle]
}
export default useToggle