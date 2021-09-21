/*
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-21 17:00:49
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-09-21 19:18:28
 */
import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
  brands: Props['brands']
  setBrands: React.Dispatch<React.SetStateAction<Props['brands']>>
}
const initialValue = {
  name: '',
  code: 0,
  remark: '',
  isEnabled: true,
}
const Form: React.FC<IProps> = ({ brands, setBrands }) => {
  const [input, setInput] = useState(initialValue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'code') {
      setInput({
        ...input,
        [e.target.name]: +e.target.value,
      })
      return
    }
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setBrands([...brands, input])
    setInput(initialValue)
  }

  return (
    <section className="App-form">
      {/* <input type="text" name="name" onChange={(e)=>{}}></input> */}
      <div className="form-item">
        <label>NAME</label>
        <input
          type="text"
          name="name"
          value={input.name}
          className="App-input"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-item">
        <label>CODE</label>
        <input
          type="number"
          name="code"
          value={input.code}
          className="App-input"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-item">
        <label>REMARK</label>
        <input
          type="textarea"
          name="remark"
          value={input.remark}
          className="App-input"
          onChange={handleChange}
        ></input>
      </div>
      <button onClick={handleClick}>ADD table-item</button>
    </section>
  )
}

export default Form
