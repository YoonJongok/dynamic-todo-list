import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoState } from "./atoms";
import Board from "./components/Board";
import CreateCategory from "./components/CreateCategory";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 680px;
  margin: 3rem auto;
`;

const CategoryBoard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function App() {
  const toDos = useRecoilValue(todoState);
  console.log(toDos);

  return (
    <Container>
      <CreateCategory />
      <CategoryBoard>
        {Object.keys(toDos).map((category, index) => (
          <Board key={index} category={category} toDos={toDos[category]} />
        ))}
      </CategoryBoard>
    </Container>
  );
}

export default App;
