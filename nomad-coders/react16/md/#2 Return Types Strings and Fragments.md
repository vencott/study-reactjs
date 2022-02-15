# 2 Return Types Strings and Fragments

## React 16 이전
- 이전 리액트에서는 오직 component 아니면 null이었다
- string 리턴이나 2개의 엘리먼트 리턴 등이 불가능했다
- 그래서 array를 만들거나 span 태그로 감싸서 리턴했다

```javascript
// 배열로 만들어서 리턴
class ReturnTypes extends Component {
    render() {
        return (
            [
                <header key={1}></header>,
                <div key={2}></div>,
                <footer key={3}></footer>
            ]
        );
    }
}
```

```javascript
// span 태그로 감싸서 리턴
class ReturnTypes extends Component {
    render() {
        return (
            <span>
                <header></header>,
                <div></div>,
                <footer></footer>
            </span>
        );
    }
}
```

## Fragment
- span 태그와 비슷하지만 훨씬 명확하다
- span을 사용할때와 다르게 웹사이트에 등장하지 않는다
- <Fragment>나 <>를 사용한다

```javascript
// <Fragment> 태그 사용
class ReturnTypes extends Component {
    render() {
        return (
            <Fragment>
                <header></header>,
                <div></div>,
                <footer></footer>
            </Fragment>
        );
    }
}
```

```javascript
// 또는, <> 태그 사용
class ReturnTypes extends Component {
    render() {
        return (
            <>
                <header></header>,
                <div></div>,
                <footer></footer>
            </>
        );
    }
}
```

## strings
- string을 리턴하는것도 가능해졌다

```javascript
class ReturnTypes extends Component {
    render() {
        return "Hello!";
    }
}
```

## Full code

```javascript
import React, {Component, Fragment} from 'react';

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
            </Fragment>
        );
    }
}

export default App;
```