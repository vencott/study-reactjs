 # 4 Error Boundaries
 
 - 컴포넌트로 하여금 컴포넌트의 자식들의 에러를 관리할 수 있게 해준다
 - 중요한 것은 컴포넌트의 칠드런의 에러에만 한정이다
 - componentDidCatch()를 활용한다

```javascript
import React, {Component, Fragment} from 'react';
import {createPortal} from 'react-dom';

class ErrorMaker extends Component {
    state = {
        friends: ["a", "b", "c", "d"]
    };

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                friends: undefined
            })
        })
    };

    render() {
        const {friends} = this.state;
        return friends.map(friend => ` ${friend} `)
    }
}

const ErrorFallback = () => " Sorry, something went wrong";

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
    state = {
        hasError: false
    };

    componentDidCatch = (error, info) => {
        console.log(`catched error ${error} the info i have is ${JSON.stringify(info)}`);
        this.setState({
            hasError: true
        })
    };

    render() {
        const {hasError} = this.state;
        return (
            <Fragment>
                <ReturnTypes/>
                <Portals/>
                {hasError ? <ErrorFallback/> : <ErrorMaker/>}
            </Fragment>
        );
    }
}

export default App;
```

- error를 핸들링 하지 않았다면, App 컴포넌트의 모든 컴포넌트가 render되지 않고 앱이 죽었었지만, 지금은 나머지 컴포넌트들은 살아있다