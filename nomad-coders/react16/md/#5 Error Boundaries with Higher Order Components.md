# 5 Error Boundaries with Higher Order Components

- 각 컴포넌트마다 hasError 체크를 해서 render 할지 말지를 검사하는 것은 좋은 방법이 아니다
- 따라서 Higher Order Components(HOC)을 사용한다

## HOC
- BoundaryHOC 이란 함수를 따로 만들어서 에러가 있으면 에러 메시지를, 없으면 인자로 받은 컴포넌트를 리턴하게한다
- 생선된 HOC에 의하여 컴포넌트를 보호하게 된다
- 만약 컴포넌트가 다른 파일에 있다면 BoundaryHOC으로 감싸서 export 해주면 된다

## Full code

```javascript
import React, {Component, Fragment} from 'react';
import {createPortal} from 'react-dom';

class ReturnTypes extends Component {
    render() {
        return "Hello!";
    }
}

class Portals extends Component {
    render() {
        return createPortal(<Message/>, document.getElementById("portalSpan"))
    }
}

const Message = () => "This is portal";

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

const BoundaryHOC = ProtectedComponent => class Boundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch = () => {
        this.setState({
            hasError: true
        })
    };

    render() {
        const {hasError} = this.state;
        return hasError ? <ErrorFallback/> : <ProtectedComponent/>
    }
};

const ErrorFallback = () => " Sorry, something went wrong";

const PReturnTypes = BoundaryHOC(ReturnTypes);
const PPortals = BoundaryHOC(Portals);
const PErrorMaker = BoundaryHOC(ErrorMaker);

class App extends Component {

    render() {
        return (
            <Fragment>
                <PReturnTypes/>
                <PPortals/>
                <PErrorMaker/>
            </Fragment>
        );
    }
}

export default BoundaryHOC(App);
```