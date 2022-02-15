# 6 Theming

## theme
- theme.js 파일을 만들고 theme 객체를 만든다

```javascript
// theme.js
const theme = {
    mainColor: "#3498db",
    dangerColor: "#e74c3c",
    successColor: "#2ecc71"
};

export default theme;
```

- 이 테마를 전체 컴포넌트에 어떻게 적용할까?
- 우선 App.js를 다음과 같이 바꿔준다

```javascript
import React, {Component} from 'react';
import styled, {createGlobalStyle} from "styled-components";

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
                    <Form/>
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

const Card = styled.div`
background-color: white;
`;

const Button = styled.button`
border-radius: 30px;
padding: 25px 15px;
`;

const Form = () => {
    return <Card><Button>Hello</Button></Card>
};

export default App;
```

## theme의 적용

- 먼저 ThemeProvider를 import 해준다

`import styled, {createGlobalStyle, ThemeProvider} from "styled-components";`

- App 컴포넌트의 render의 최상위에 ThemeProvider를 위치시키고, theme.js에서 theme을 import해 이를 적용시킨다

```javascript
import theme from "./theme"

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
```

- ThemeProvider 하위의 모든 컴포넌트들은 props에서 theme을 가져와 사용할 수 있다

```javascript
const Card = styled.div`
background-color: ${props => props.theme.mainColor}
`;

const Button = styled.button`
border-radius: 30px;
padding: 25px 15px;
background-color: ${props => props.theme.successColor}
`;
```

## full code

```javascript
// App.js
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

const Container = styled.div`
height: 100vh;
width: 100%;
background-color: pink;
`;

const Card = styled.div`
background-color: ${props => props.theme.mainColor}
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

```javascript
// theme.js
const theme = {
    mainColor: "#3498db",
    dangerColor: "#e74c3c",
    successColor: "#2ecc71"
};

export default theme;
```