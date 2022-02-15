# 7 Nesting

## Nesting in styled components
- SAS의 Nesting과 유사하게 styled components에서 사용한다
- Container 안의 모든 카드를 선택해서 배경색을 바꾸는 법은 다음과 같

```javascript
const Container = styled.div`
height: 100vh;
width: 100%;
background-color: pink;
${Card}{
    background-color: blue;
}
`;
```
## full code

```javascript
import React, {Component} from 'react';
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import theme from "./theme"

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
                <ThemeProvider theme={theme}>
                    <Container>
                        <GlobalStyle/>
                        <Form/>
                    </Container>
                </ThemeProvider>
            </div>
        );
    }
}

const Card = styled.div`
background-color: ${props => props.theme.mainColor}
`;


const Container = styled.div`
height: 100vh;
width: 100%;
background-color: pink;
${Card}{
    background-color: blue;
}
`;

const Button = styled.button`
border-radius: 30px;
padding: 25px 15px;
background-color: ${props => props.theme.successColor}
`;

const Form = () => {
    return <Card><Button>Hello</Button></Card>
};

export default App;

```