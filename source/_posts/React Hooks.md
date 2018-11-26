---
title: React Hooks
date: 2018-11-22 21:20:08
tags: 前端
---

## Hooks
Hooks是React16.7-alpha引入的新特性，用于不再写class也可调用state

### State Hook
Sample:
```javascript
import { useState } from 'react';

function Example() {
  const [count /* getter */, setCount/* setter */] = useState(0/* param */);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### Effect Hook
DOM变化后的后续函数  
Sample
```javascript
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```