---
title: button
order: 1
---

本 Demo 演示一行文字的用法。

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Checkbox } from 'shellcoochi-ui';

class App extends Component {
  render() {
    const options = [
      { label: "Apple", value: "Apple" },
      { label: "Pear", value: "Pear" },
      { label: "Orange", value: "Orange", disabled: true },
    ];
    return (<>
      <div>
        <Button>default</Button>
        <Button size={'small'}>small</Button>
        <Button size={'large'}>large</Button>
        <Button disabled>disabled</Button>
        <Button type={'dashed'}>dashed</Button>
      </div>
      </>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
