/*
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-21 17:00:49
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-09-21 18:39:59
 */
import React, { useState } from 'react'

const Form = () => {
  const [input, setInput] = useState({
    name: '',
    code: 0,
    remark: '',
    isEnabled: true,
  })
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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {}

  return (
    <section className="App-form">
      {/* <input type="text" name="name" onChange={(e)=>{}}></input> */}
      <div className="form-item">
        <label>NAME</label>
        <input type="text" name="name" className="App-input" onChange={handleChange}></input>
      </div>
      <div className="form-item">
        <label>CODE</label>
        <input type="number" name="code" className="App-input" onChange={handleChange}></input>
      </div>
      <div className="form-item">
        <label>REMARK</label>
        <input type="textarea" name="remark" className="App-input" onChange={handleChange}></input>
      </div>
      <button onClick={handleClick}>ADD table-item</button>
    </section>
  )
}

export default Form
