# 3 Portals

- React.js는 <div id='root'>를 찾아서 마운트한다
`ReactDOM.render(<App/>, document.getElementById('root'));`
- 리액트 루트 밖을 컨트롤하고 싶을 때가 있다
- portal을 사용하면 리액트 루트 밖을 변경할 수 있다

## portals
- portal은 리액트 루트 밖에 리액트를 넣을 수 있게 해준다
- 리액트 루트 밖에서 render를 할때 사용하는 것

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
        <title>React16</title>
    </head>
    <body>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        <header>
            <h1>Can't touch this</h1>
            <span id="portalSpan"></span>
        </header>
        <div id="root"></div>
    </body>
</html>
```

```javascript
import React, {Component, Fragment} from 'react';
import {createPortal} from 'react-dom';

class Portals extends Component {
    render() {
        return createPortal(<Message/>, document.getElementById("portalSpan"))
    }
}

const Message = () => "This is portal";

class ReturnTypes extends Component {
    render() {
        return "Hello!";
    }
}

class App extends Component {
    render() {
        return (
            <Fragment>
                <ReturnTypes/>
                <Portals/>
            </Fragment>
        );
    }
}

export default App;
```

- 리액트에서 리액트 밖을 컨트롤 한것이다
- 다른 페이지에서 로딩을 할때 유용하다