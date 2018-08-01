---
title: react-router 报错The prop `history` is marked as required in `Router`, but its val
date: 2018-07-24 21:20:08
---

在使用 react-router(4.3.1)构建 react 路由时，进入首页发现报错

```
Warning: Failed prop type: The prop `history` is marked as required in `Router`, but its value is `undefined`.
    in Router (created by ReactRouter)
    in ReactRouter
```

检查代码

```javascript
import React from "react";
import { Route, Router, hashHistory } from "react-router";
import App from "../App";
import Add from "../pages/Add";
import Modify from "../pages/Modify";
import Delete from "../pages/Delete";
import Query from "../pages/Query";

export default class ReactRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/">
          <Route path="app" component={App}>
            <Route path="delete" component={Delete} />
            <Route path="add" component={Add} />
            <Route path="modify" component={Modify} />
            <Route path="query" component={Query} />
          </Route>
        </Route>
      </Router>
    );
  }
}
```

发现已经添加了 history 这个属性，那么为什么还会报这个错误呢
这是因为引入的 react-router 版本是 4 的，所以这种老式写法不再支持，修改成 V4 新版本，使用 react-router-dom 库后显示正常。
