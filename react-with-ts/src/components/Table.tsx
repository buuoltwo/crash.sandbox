/*
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-21 11:16:08
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-09-21 17:37:06
 */
import React from 'react'
interface IProps {
  brands: {
    name: string
    code: number
    remark?: string
    isEnabled: boolean
  }[]
}
const Table: React.FC<IProps> = ({ brands }) => {
  const renderList = (): JSX.Element[] =>
    brands.map((item) => (
      <li key={item.code.toString()}>
        <b>{item.code}</b>
        <span>{item.name}</span>
      </li>
    ))

  return <ul className="App-table">{renderList()}</ul>
}

export default Table
