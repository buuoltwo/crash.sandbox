<!--
 * @Descripttion :
 * @Author       : zhangming
 * @Date         : 2021-10-08 10:41:08
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-10-08 13:19:31
-->

# 类型转换

大多数情况下，运算符和函数会自动将赋予它们的值转换为正确的类型。

比如，`alert` 会自动将任何值都转换为字符串以进行显示。算术运算符会将值转换为数字。

在某些情况下，我们需要将值显式地转换为我们期望的类型。

```smart header="分类"
分类:
- 原始类型
- 对象 — 原始值转换
```

## 前瞻
A. **原始类型** 有三种常用的类型转换：转换为 string 类型、转换为 number 类型和转换为 boolean 类型。
1. 通过`String(args)`, `Number(args)`,`Boolean(args)`对原始类型进行转换
2. 字符串转换最明显。`false` 变成 `"false"`，`null` 变成 `"null"` 等
3. 在算术函数和表达式中，会自动进行 number 类型转换
4. 布尔（boolean）类型转换发生在逻辑运算中（稍后我们将进行条件判断和其他类似的东西）

B. **对象 — 原始值转换**
1. `ToPrimitive`
2. `Symbol.toPrimitive`
3. `toString/valueOf`

## 数字型转换

number 类型转换规则：

| 值 | 变成…… |
| --- | --- |
| `undefined` | `NaN` |
| `null` | `0` |
|<code>true&nbsp;和&nbsp;false</code> | `1` and `0` |
| `string` | 去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 `0`。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 `NaN`。 |

例子：

```js run
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

请注意 `null` 和 `undefined` 在这有点不同：`null` 变成数字 `0`，`undefined` 变成 `NaN`。

## 布尔值转换

转换规则如下：

- 直观上为“空”的值（如 `0`、空字符串、`null`、`undefined` 和 `NaN`）将变为 `false`。
- 其他值变成 `true`。
-------------
```smart header="特别注意:"
特别注意:

上述的大多数规则都容易理解和记忆。人们通常会犯错误的值得注意的例子有以下几个：

- 对 `undefined` 进行数字型转换时，输出结果为 `NaN`，而非 `0`。
- 对 `"0"` 和只有空格的字符串（比如：`"   "`）进行布尔型转换时，输出结果为 `true`。
```

## ToPrimitive

我们可以使用特殊的对象方法，对字符串和数值转换进行微调。

三种 "hint": 在 [规范](https://tc39.github.io/ecma262/#sec-toprimitive) 中有详细介绍（译注：当一个对象被用在需要原始值的上下文中时，例如，在 `alert` 或数学运算中，对象会被转换为原始值）

> `string`, `number`, `default`

**为了进行转换，JavaScript 尝试查找并调用三个对象方法：**

1. 调用 `obj[Symbol.toPrimitive](hint)` —— 带有 symbol 键 `Symbol.toPrimitive`（系统 symbol）的方法，如果这个方法存在的话，
2. 否则，如果 hint 是 `"string"`
   —— 尝试 `obj.toString()` 和 `obj.valueOf()`，无论哪个存在。
3. 否则，如果 hint 是 `"number"` 或 `"default"`
   —— 尝试 `obj.valueOf()` 和 `obj.toString()`，无论哪个存在。

## Symbol.toPrimitive

我们从第一个方法开始。有一个名为 `Symbol.toPrimitive` 的内建 symbol，它被用来给转换方法命名，像这样：

```js
obj[Symbol.toPrimitive] = function(hint) {
  // 返回一个原始值
  // hint = "string"、"number" 和 "default" 中的一个
}
```

例如，这里 `user` 对象实现了它：

```js run
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// 转换演示：
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

## hint(变体)小结

对象到原始值的转换，是由许多期望以原始值作为值的内建函数和运算符自动调用的。

这里有三种类型（hint）：
- `"string"`（对于 `alert` 和其他需要字符串的操作）
- `"number"`（对于数学运算）
- `"default"`（少数运算符）

规范明确描述了哪个运算符使用哪个 hint。很少有运算符“不知道期望什么”并使用 `"default"` hint。通常对于内建对象，`"default"` hint 的处理方式与 `"number"` 相同，因此在实践中，最后两个 hint 常常合并在一起。

转换算法是：

1. 调用 `obj[Symbol.toPrimitive](hint)` 如果这个方法存在，
2. 否则，如果 hint 是 `"string"`
    - 尝试 `obj.toString()` 和 `obj.valueOf()`，无论哪个存在。
3. 否则，如果 hint 是 `"number"` 或者 `"default"`
    - 尝试 `obj.valueOf()` 和 `obj.toString()`，无论哪个存在。

在实践中，为了便于进行日志记录或调试，对于所有能够返回一种“可读性好”的对象的表达形式的转换，只实现以 `obj.toString()` 作为全能转换的方法就够了。