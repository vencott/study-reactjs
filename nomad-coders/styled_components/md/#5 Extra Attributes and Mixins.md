# 5 Extra Attributes and Mixins

## Attributes
- 커스텀 attributes를 주고 싶을땐 어떻게 할까?
- 스타일 컴포넌트를 만들면서 attrs 설정을 해준다

```javascript
class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <GlobalStyle/>
                    <Input placeholder="hello"/>
                </Container>
            </div>
        );
    }
}

const Input = styled.input.attrs({
    required: true
})`
border-radius: 5px;
`;
```

## Mixins
- mixins는 여러 곳에서 쓸 수 있는 내가 그룹화하고 싶은 css를 모은 그룹이다
- 다른 컴포넌트를 확장하는 방법과 mixin을 쓰는 두가지 방법이 있다
- awesomeCard라는 mixin을 만들어서 다른곳에 적용해보자

```javascript
class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <GlobalStyle/>
                    <Input placeholder="hello"/>
                </Container>
            </div>
        );
    }
}

const awesomeCard = css`
box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
background-color: white;
border-radius: 10px;
padding: 20px;
`;

const Container = styled.div`
height: 100vh;
width: 100%;
background-color: pink;
${awesomeCard}
`;

const Input = styled.input.attrs({
    required: true
})`
border: none;
${awesomeCard}
`;
```