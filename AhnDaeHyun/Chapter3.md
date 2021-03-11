# Chapter3

## class component
- react는 자동적으로 모든 class component의 render method를 실행하고자 한다.
- 그래서 render method에 기능을 넣어주어야 함.

## state
- state는 object
- component의 data를 넣을 공간, 이 안의 데이터는 변할 수 있다.
- state의 값을 직접 변경할 수는 없고 `setState({count:-1})` 처럼 자바의 setter, getter 처럼 값을 변경해주어야 한다. 이렇게 해야 render함수가 같이 새롭게 호출되어(refresh) 잘 작동한다.