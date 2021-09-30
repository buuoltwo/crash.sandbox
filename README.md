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

# react-usecontext

1. creating multiple nested components

   > parent -> child1 -> child2 -> ... -> child5

2. child5 would apply the value of hook **useContext** as to render.
