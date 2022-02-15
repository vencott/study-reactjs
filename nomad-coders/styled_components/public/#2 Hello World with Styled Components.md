# 2 Hello World with Styled Components

## add & import dependency
1. 먼저 CLI를 통해 styled-components를 추가해준다

    `yarn add styled-components`

2. css import문은 지우고, styled components를 import해준다

    `import styled from "styled-components";`

## Styled Components
- 컴포넌트가 이미 스타일이 있는 것
- 다음은 styled component를 만드는 문법이다

```javascript
styled.button(스타일링 하려는 HTML 요소)`
// css 코드
`
```

- 이를 Button에 적용시켜보면 다음과 같다
 
```javascript
const Button = styled.button`
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
        outline: none;
    }
`;
```

## props
- 그렇다면 button--success와 button--danger는 어떻게 구현할 것인가?
- 우리가 만든건 styled component 즉, 컴포넌트이므로 props가 존재하고, 이를 활용한다

```javascript
const Button = styled.button`
    // ...
    background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71"}
`;
```

- 이제 css없이도 스타일 작업을 할 수 있다

## full code

```javascript
// App.js
import React, {Component} from 'react';
import styled from "styled-components";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Button success>Hello</Button>
                    <Button danger>hello</Button>
                </Container>
            </div>
        );
    }
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: pink;
`;

const Button = styled.button`
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
        outline: none;
    }
    background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71"}
`;

export default App;
```

```
/*App.css*/
none
```