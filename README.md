### react 后台模板架子练习


#### 1. 安装依赖

`npm install or yarn `

#### 2. 运行

`npm start or yarn start`

### 3. react-route4 路由配置

**此类型路由可适用在移动端**

```
import React, { Component } from 'react'
// import { Router, Route, IndexRedirect, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Layouts from '../layout/layout.js'

import Home from '../page/home/home.jsx'
import About from '../page/about/about.jsx'
import Me from '../page/me/me.jsx'


const App = () => {
    return (
      <BrowserRouter>
      <Switch>

        <Route exact path="/me"  component={ Me } />

        <Layouts exact >
          <Route exact path="/stuff"  component={ Home } />
          <Route exact path="/stuff/about"  component={ About } />
        </Layouts>

     </Switch>
   </BrowserRouter>
    )
}

export default App


```

```
import React, { Component } from 'react'
// import { Router, Route, IndexRedirect, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Layouts from '../layout/layout.js'

import Home from '../page/home/home.jsx'
import About from '../page/about/about.jsx'
import Me from '../page/me/me.jsx'


const App = () => {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/me"  component={ Me } />

        <Layouts exact >
          <Route exact path="/"  component={ Home } />
          <Route exact path="/about"  component={ About } />
        </Layouts>


     </Switch>
   </BrowserRouter>
    )
}

export default App

```

`git commit -m '富文本编辑器样式处理' --no-verify`


### 4. 添加富文本编辑器

`npm install --save braft-editor`

[github](https://github.com/margox/braft-editor)

`npm install --save react-draft-wysiwyg`

[github](https://github.com/jpuri/react-draft-wysiwyg)
