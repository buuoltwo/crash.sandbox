/*
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-29 10:52:16
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-10 14:47:18
 */
import './App.css'
// import Parent from './components/ComponentWithUseContext/Parent'
// import ComponentWithMemo from './components/ComponentWithMemo'
import UsingCustomHooks from './components/UsingCustomHooks'

function App() {
  return (
    <div className="App">
      <main className="App-header">
        {/* <Parent></Parent> */}
        {/* <ComponentWithMemo></ComponentWithMemo> */}
        <UsingCustomHooks></UsingCustomHooks>
      </main>
    </div>
  )
}

export default App
