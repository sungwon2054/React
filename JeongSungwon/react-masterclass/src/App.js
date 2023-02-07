import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  width: 100px;
  height: 100px;
`;

const Input = styled.input.attrs({ required: true })`
background-color: tomato;
`;

function App() {
return (
  <Father as="header">
    <Btn />
    <Btn as="a" href="/" />
    <Input />
    <Input />
    <Input />
    <Input />
    <Input />
  </Father>
);
}

export default App;