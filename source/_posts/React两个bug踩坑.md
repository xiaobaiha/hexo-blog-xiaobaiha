---
title: React两个bug踩坑
date: 2018-07-06 21:20:08
tags: 前端
---

## ReactDOM

```
import React from 'react';
import App from './App';

React.ReactDOM.render(<App />, document.getElementById('root'));
```

console 报错 render 找不到，这是因为 react 已经把 ReactDOM 分离出来，这样引用会出错，改为

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

后正常

## return 错误

console 错误信息

```
Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null
```

这是因为代码中 return 同一行没有代码

```
render(){
    return
    (
      <div>
        <p>App test</p>
      </div>)
  }
```

改为

```
render(){
    return (
      <div>
        <p>App test</p>
      </div>)
  }
```

后正常
