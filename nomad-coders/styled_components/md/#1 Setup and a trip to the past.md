 # 1 Setup and a trip to the past
 
 ## 기존의 방법
 - 클래스 명으로 구분하여 css를 적용시킨다
 
 ```javascript
 // App.js
import React, {Component, Fragment} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Fragment>
                    <Button danger/>
                    <Button/>
                </Fragment>
            </div>
        );
    }
}

const Button = ({danger}) => {
    return <button className={danger ? "button button--danger" : "button button--success"}>Hello</button>;
};

export default App;
 ```
 
 ```css
 /* App.css*/
.button {
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;
}

.button:active,
.button:focus {
    outline: none;
}

.button--success {
    background-color: #2ecc71;
}

.button--danger {
    background-color: #e74c3c;
}
 ```
 
 - 이 방법은 global하고, 모듈을 사용하면 eject 해야하는데, 그러면 sass를 바꿔야 하는 등 안좋은 점이 많다
 - 우리가 배울 것은 2개의 클래스명이 없는 버튼을 사용하는 것이다
