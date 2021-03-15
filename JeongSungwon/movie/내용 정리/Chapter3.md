# 3. STATE
## 3.0 Class Components and State
- state: data가 동적으로 변하는 것들(props로 해결이 불가한 것들)
- function component VS class component  
  1. function component  
      - function이므로 return 존재하고 이후 screen에 표시
  2. class component
      - class이지만, react component으로부터 확장 되고 screen에 표시  
      - react는 class component의 `render method를 실행`
- class component를 사용하는 이유는 `state 떄문`
- state 사용 예시

```JSX
state = {
  count: 0
}
render() {
  return <h1>{this.state.count}</h1>;
}
```

- React는 props로 onClick을 주면 클릭효과를 줌  
(JavaScript의 addEventlistener로 click을 주는 것과 같음)
