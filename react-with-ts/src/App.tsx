import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Table from './components/Table'
import Form from './components/Form'

interface IState {
  brands: {
    name: string
    code: number
    remark?: string
    isEnabled: boolean
  }[]
}
const initialValue: IState['brands'] = [
  {
    name: 'build-your-dream',
    code: 1,
    remark: 'Their cars are pretty COOL .',
    isEnabled: true,
  },
]
function App() {
  const [brands, setBrands] = useState<IState['brands']>(initialValue)
  const tableProps = { brands, setBrands }
  return (
    <div className="App">
      <section className="App-header">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Table {...tableProps}></Table>
          <Form></Form>
        </main>
        <footer>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </footer>
      </section>
    </div>
  )
}

export default App
