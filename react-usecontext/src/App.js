/*
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-29 10:52:16
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-08 16:38:10
 */
import './App.css'
// import Parent from './components/ComponentWithUseContext/Parent'
// import ComponentWithMemo from './components/ComponentWithMemo'
import StaleClosure from './components/StaleClosure'

function App() {
  return (
    <div className="App">
      <main className="App-header">
        {/* <Parent></Parent> */}
        {/* <ComponentWithMemo></ComponentWithMemo> */}
        <StaleClosure></StaleClosure>
      </main>
    </div>
  )
}

export default App
