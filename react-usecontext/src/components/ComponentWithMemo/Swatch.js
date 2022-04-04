/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2022-04-04 15:52:21
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-04 16:43:41
 */

export default function Swatch({ color }) {
    console.log("Swatch rendered", color)
    return (
        <div style={{ width: 75, height: 75, backgroundColor: color }}></div >
    )
}
