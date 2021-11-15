---
title: checkbox
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
          <Checkbox
            onChange={(e) => {
              console.log("checked:", e.target.checked);
            }}
          >
            basic
          </Checkbox>
          <Checkbox disabled>disabled</Checkbox>
          <br />
          <Checkbox.Group
            options={options}
            onChange={(checkedValues) => {
              console.log("checked = ", checkedValues);
            }}
          />
      </div>
      </>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
