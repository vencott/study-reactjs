# 8 CSS on React Native

## React Native
- 프로젝트 루트 디렉토리에 expo를 이용해 react native app을 만든다

`expo init`

- react native 루트 디렉토리로 이동해 styled-componets를 설치한다

`yarn add styled-components`

- react 웹에서 할 때와 마찬가지로 styled-compoents를 이용해 css로 ui를 작성한다

```javascript
// App.js
import React from 'react';
import styled from "styled-components";

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
padding: 10px 100px;
`;

const Title = styled.Text`
font-weight: 600;
font-size: 32px;
color: red;
`;

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Title>Hello styled components in React Native!</Title>
            </Container>
        );
    }
}
```

## react native web
- css를 리액트 그리고 리액트 네이티브 컴포넌트에 다 쓸 수 있다
- react native web에서 view로 작성하면 react native web이 이를 div로 바꿔준다
- 다음은 react-native-web github의 예제이다

```javascript
import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('react-root') });
```

- 애플리케이션을 작동할때마다 html로 돌리고 styled.view에서 styled.div로 바뀐다

**_styled components는 리액트 생태계에서 매우 혁신적인 발전이다_**
