# 3 injectGlobal and Extend

## injectGlobal
- 전체 페이지에 마진을 없애 싶다면 어떻게 해야 할까?
- 바디를 위해서 컴포넌트를 만들어야 할까?
- No, injectGlobal을 사용한다
- 현재는 deprecated 되었으므로 createGlobalStyle로 대체한다

```javascript
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
                    <Button success>Hello</Button>
                    <Button danger>hello</Button>
                </Container>
            </div>
        );
    }
}
```

## extensions
- 앵커를 기존에 만든 버튼의 스타일로 표현하고 싶다면?
- 나의 컴포넌트를 재활용하고 싶은것
- withComponent()를 사용한

```javascript
const Anchor = Button.withComponent('a');

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <GlobalStyle/>
                    <Button success>Hello</Button>
                    <Button danger>hello</Button>
                    <Anchor href="http://google.com" success>Go to google</Anchor>
                </Container>
            </div>
        );
    }
}
```

- 하지만 anchor에 밑줄이 있으므로 Button에서 다 가져온 뒤 extend 한다
- extend는 deprecate 되었으므로 다음과 같은 방식으로 사용한다

```javascript
const Anchor = styled(Button.withComponent('a'))`
    text-decoration: none
`;
```