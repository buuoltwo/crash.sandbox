/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2022-04-04 15:52:21
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-04 22:47:32
 */

export default function Swatch({ params }) {
    console.log("Swatch rendered", params.color)
    return (
        <div style={{ width: 75, height: 75, backgroundColor: params.color }}></div >
    )
}
