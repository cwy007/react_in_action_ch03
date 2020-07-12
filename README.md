# React In Action

《React实战》ch03

```bash
npm install -g browser-sync

# 实时更新页面
browser-sync start --server --browser "Google Chrome" --files "stylesheets/*.css, *.html, *.js"

```

## 问题

* 当谈及“状态”时，我们究竟讨论的是什么？
* 如何描述应用在某个时刻的状态？

## 概念

* 什么是状态

状态：程序在特定瞬间可访问的所有信息。

仅通过读取你就可以检索给定时刻的状态，但当你随着时间的推移而进行了某些修改，程序的状态就会变化。

* 减少或屏蔽一些现代UI的极度复杂的状态

一种方法是提供两个处理数据的特定API：属性（props）和状态（state）。

*可变的

一个可变的临时数据结构，随着时间的推移只支持一个版本；可变的数据结构在其变化时可以被覆盖并且不支持其他版本。

* 不可变的

一个不可变的持久数据结构，随着时间的推移可以支持多个版本，但不能直接覆盖；不可变数据结构通常是持久的。

![可变vs不可变的数据结构](https://tva1.sinaimg.cn/large/007S8ZIlly1ggomjgjre1j30hs08q0ug.jpg)

不可变或持久的数据结构常常记录一段历史并且不会改变，但会对随着时间的推移发生的变化进行版本化。但是，临时数据结构通常不记录历史并且随着每次更新都会被抛弃

* 另一种考虑不可变数据结构和可变的数据结构之间的区别的方法是考虑这两种数据结构各自拥有的不同能力和内存。

![处理可变数据和不可变数据的变化](https://tva1.sinaimg.cn/large/007S8ZIlly1ggomrp074wj30hs0cidi2.jpg)

临时数据结构没有版本，所以当更改它们时，所有以前的状态都消失了。它们可以说是`活在当下`，而不可变数据结构能够随时间的推移而持续存在

**提示** 考虑不可变性与可变性的另一种方法是考虑“保存”和“另存为”之间的区别。

React用可变的方式暴露组件的状态（通过`setState`进行改变）并将属性作为只读的。

* this.state

this引用的是类的实例，而state则是一个React会进行追踪的特殊属性。

* setState API

setState接收一个用来设置组件新状态的函数以及一个可选的回调函数。

```jsx
setState(
  updater,    // (prevState, props) => stateChange
  [callback]
) -> void
```

React的全面声明性异步范式：容许系统（React）`安排更新`，保证顺序但不保证时间。

setState会使用updater函数返回的对象与当前状态进行浅合并。
