---
title: Simple Usage
order: 1
---

本 Demo 演示一行文字的用法。

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Switch from 'switch';

class App extends Component {
  render() {
    return (
      <div>
        <Switch checkedChildren={"switch-on"} unCheckedChildren={"switch-off"}/>
        <Switch disabled={true} checkedChildren={"switch-on"} unCheckedChildren={"switch-off"} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
