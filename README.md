<!--
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-09-20 11:10:54
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-09-30 12:01:42
-->

# crash.sandbox

```bash
nvm -v
npm -v
node -v
npm install -g yarn
 npm install create-react-app -g
```

# react-with-ts

> **App.tsx**

```bash
create-react-app --template typescript react-with-ts
cd react-with-ts && yarn start
```

1. interface:**useState<IState['brands']>([])**
2. **React.FC<IProps>**
3. [Converting .jsx to .tsx: --Stackoverflow](https://stackoverflow.com/questions/55015303/reactjs-error-enoent-no-such-file-or-directory-open-after-converting-jsx)

# react-frameworks

1. creating multiple nested components

   > parent -> child1 -> child2 -> ... -> child5

2. child5 would apply the value of hook **useContext** as to render.

 #### react-memo

 ##### what is React.memo

 eng:https://devdocs.io/react/react-api#reactmemo

 zh-cn:https://zh-hans.reactjs.org/docs/react-api.html#reactmemo

 1. create a `index.js` file, then append a child called `Swatch`

 2. index.js is a React component, 
  - it has states： `count`, `color`
  - two buttons can control its states and **Re-Render App**
  - `Swatch` receive props includes `color`

 3. `Swatch` without memo:

|                                 |                                |                                  |
| ------------------------------- | ------------------------------ | -------------------------------- |
| **SWATCH HAS SAME PROPS:**      | click **color button** 5 times | ReRender App && Re-Render Swatch |
| **SWATCH HAS Different PROPS:** | click **color button** 5 times | ReRender App && Re-Render Swatch |

 4. `Swatch` wrapped in memo:
```js 
 const T = React.memo(Swatch)
 return <T color={color}></T>
```

|                                 |                                |                                  |
| ------------------------------- | ------------------------------ | -------------------------------- |
| **SWATCH HAS SAME PROPS:**      | click **count button** 5 times | ReRender App **Only**            |
| **SWATCH HAS Different PROPS:** | click **color button** 5 times | ReRender App && Re-Render Swatch |

# umi-crash-in-micro-fe

INITIALIZE:

https://umijs.org/zh-CN/docs/getting-started

PLUGIN:

https://umijs.org/zh-CN/plugins/plugin-qiankun

