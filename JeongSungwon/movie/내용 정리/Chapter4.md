# 4. Making The Movie App

## 4.0. Fetching Movies from API
- data를 사용하는 방법(in JavaScript) : fetch, Axios

## 4.1 Rendering the Movies
- state를 사용하지 않는다면, function component 사용해도 됨
- props를 사용할 떄, key 값은 필수 
- map을 이용하여 object를 여러개 풀어 쓸 수 있음
```jsx
movies.map(movie => () {
    <Movie key={movie.key} id={movie.id}>
})
```

## 4.3. Adding Genres
- class component일 때, html의 class와 JavaScript의 class를 구분할 수가 없다.  
따라서 html의 class -> className으로 변경  
(label의 for -> htmlFor)
- map의 두번째 parameter는 index값


## state를 갖기 위해 class component를 쓸 필요가 없음 (react hook 사용)
