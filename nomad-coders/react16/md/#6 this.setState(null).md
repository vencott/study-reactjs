# 6 this.setState(null)
- setState()를 하면 컴포넌트는 업데이트를 한다
- setState(null)을 통해 언제 컴포넌트를 업데이트 할지, 안할지 결정할 수 있다

## state를 바꾸는 다른 패턴
- this.setState()를 직접 호출하는 것이 아닌 다른 함수로 리액트의 state를 바꿀 수 있다

```javascript
const eatPizza = (state, props) => {
    const {pizzas} = state;
    return {
        pizzas: pizzas + 1
    }
};

class Controlled extends Component {
    state = {
        pizzas: 1
    };

    render() {
        const {pizzas} = this.state;
        return <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${pizzas === 1 ? "pizza" : "pizzas"}`}</button>
    }

    _handleClick = () => {
        this.setState(eatPizza)
    }
}
```

## return null
- eatPizza()에서 return null을 하면, state는 업데이트를 그만둔다

```javascript
const eatPizza = (state, props) => {
    const {pizzas} = state;
    if (pizzas < MAX_PIZZAS) {
        return {
            pizzas: pizzas + 1
        }
    }
    else
        return null;
};
```

- 리턴을 하고, 그를 토대로 setState()하지만, 그 리턴이 null일때는 업데이트 하지 않는다
- state를 죽이지는 않고 업데이트를 안할 뿐이다
- React 16 이전에 return null을 하면 state를 바꿨지만 이제는 컨트롤할 수 있고 state를 업데이트 하지도, 컴포넌트를 업데이트 하지도 않는다

## full code

```javascript
import React, {Component} from 'react';

const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
    const {pizzas} = state;
    if (pizzas < MAX_PIZZAS) {
        return {
            pizzas: pizzas + 1
        }
    }
    else
        return null;
};

class Controlled extends Component {
    state = {
        pizzas: 1
    };

    render() {
        const {pizzas} = this.state;
        return <button
            onClick={this._handleClick}>{`I have eaten ${pizzas} ${pizzas === 1 ? "pizza" : "pizzas"}`}</button>
    }

    _handleClick = () => {
        this.setState(eatPizza)
    }
}

class App extends Component {

    render() {
        return (
            <Controlled/>
        );
    }
}

export default App;
```