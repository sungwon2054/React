# 2. JSX & PROPS
## 2.0. Creating your first React Component
- JSX : JavaScript안의 HTML이며, React에만 존재.
- Component : HTML을 반환하는 함수
- React에는 하나의 Component만 존재 할 수 있다

## 2.1. Reuseable Components with JSX + Props
- props : component에 정보를 보내는 방법
- Component의 첫 글자는 항상 대문자
```JSX
//{ fav } 대신 props로 받기 가능
function Food( {fav} ) {
  return 
    //props로 받았을 시, props.fav로 사용
    <span> I like {fav} </span>
}
<Food fav="apple" />
```

## 2.2. Dynamic Component Generation
- map: JavaScript에서 function을 취해서 array의 각 item을 적용
```javascript
const study = ["DaeHyun", "jewhan", "sungwon"]
study.map(name => {return name + " fighting"})
```

## 2.3. map Recap
- react의 elment들은 유일해야하고, list에 들어가면 유일성을 잃는다.  
(따라서, key 값을 설정해줘야함)
- react에서는 img의 접근성 오류도 나타내준다.