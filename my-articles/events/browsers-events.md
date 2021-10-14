<!--
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2021-10-11 15:32:14
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-10-11 15:58:27
-->

# 参考资料
1. [React 合成事件和 DOM 原生事件混用](https://juejin.cn/post/6903805279483297805#heading-5)
2. [浏览器事件简介](https://zh.javascript.info/introduction-browser-events)

# 事件简介
## 分类: 

这是最有用的 DOM 事件的列表，你可以浏览一下：

**鼠标事件：**
- `click` —— 当鼠标点击一个元素时（触摸屏设备会在点击时生成）。
- `contextmenu` —— 当鼠标右键点击一个元素时。
- `mouseover` / `mouseout` —— 当鼠标指针移入/离开一个元素时。
- `mousedown` / `mouseup` —— 当在元素上按下/释放鼠标按钮时。
- `mousemove` —— 当鼠标移动时。

**键盘事件**：
- `keydown` 和 `keyup` —— 当按下和松开一个按键时。

**表单（form）元素事件**：
- `submit` —— 当访问者提交了一个 `<form>` 时。
- `focus` —— 当访问者聚焦于一个元素时，例如聚焦于一个 `<input>`。

**Document 事件**：
- `DOMContentLoaded` —— 当 HTML 的加载和处理均完成，DOM 被完全构建完成时。

**CSS 事件**：
- `transitionend` —— 当一个 CSS 动画完成时。

## handler: 

### 原生 HTML / HTML + JS

1. 只有 HTML：

    ```html autorun height=50
    <input type="button" *!*onclick="alert('Click!')"*/!* value="Button">
    ```
2. HTML + JS：

    ```html autorun height=50
    <input type="button" id="button" value="Button">
    <script>
    *!*
      button.onclick = function() {
        alert('Click!');
      };
    */!*
    </script>
    ```

### 访问元素：this

处理程序中的 `this` 的值是对应的元素。就是处理程序所在的那个元素。

下面这行代码中的 `button` 使用 `this.innerHTML` 来显示它的内容：

```html height=50 autorun
<script>
  function countRabbits(self) {
    console.log(this,self)
  }
</script>

<input type="button" onclick="countRabbits(this)" value="Count rabbits!">
  
  <button onclick="alert(this.innerHTML)">Click me</button>
```

### React 合成事件与 DOM原生事件 混合使用

```js
import React, { useEffect, useRef } from 'react'

function Demo() {
  const dome = useRef(null)

  useEffect(() => {
    addEventListener(dome.current, 'click', clickDOMButton, false)
  }, [])

  function clickDOMButton() {
    console.log('DOM event')
  }

  function clickReactButton() {
    console.log('React event')
  }

  return (
    <div>
      <button ref={dome} onClick={clickReactButton}>
        按钮
      </button>
    </div>
  )
}

export default Demo

// 作者：马赛克
// 链接：https://juejin.cn/post/6903805279483297805
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

 -----------------
 打印结果: 

 DOM event
 React event

 -----------------
 原因:
 
 当点击 button 时，原生事件直接就触发了，而合成事件要冒泡至 document 之后，才会去触发。