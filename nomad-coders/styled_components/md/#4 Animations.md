# 4 Animations
- danger 버튼에 애니메이션을 준다

## keyframes
- keyframes로 애니메이션을 정의하고 Button 컴포넌트 내에서 props를 통해 애니메이션을 제어한다

```javascript
import styled, {createGlobalStyle, keyframes, css} from "styled-components";

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
    background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71"};
    ${props => {
    if (props.danger)
        return css`animation: ${rotation} ${props.rotationTime}s linear infinite`
}}
`;

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg)
    }
`;
```

## full code

```javascript
import React, {Component} from 'react';
import styled, {createGlobalStyle, css, keyframes} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        padding: ;
        margin: 0;
    }
`;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <GlobalStyle/>
                    <Button success>Hello</Button>
                    <Button danger rotationTime={5}>hello</Button>
                    <Anchor href="http://google.com" success>Go to google</Anchor>
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
    background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71"};
    ${props => {
    if (props.danger)
        return css`animation: ${rotation} ${props.rotationTime}s linear infinite`
}}
`;

const Anchor = styled(Button.withComponent('a'))`
    text-decoration: none
`;

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg)
    }
`;

export default App;

```