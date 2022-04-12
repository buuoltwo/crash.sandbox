/*
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-29 10:52:16
 * @LastEditors  : zhangming
 * @LastEditTime : 2022-04-04 16:43:02
 */
import './App.css'
// import Parent from './components/ComponentWithUseContext/Parent'
import ComponentWithMemo from './components/ComponentWithMemo'

function App() {
  return (
    <div className="App">
      <main className="App-header">
        {/* <Parent></Parent> */}
        <ComponentWithMemo></ComponentWithMemo>
      </main>
    </div>
  )
}

export default App
