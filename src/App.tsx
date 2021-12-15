import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState, TODO_LIST } from "./atoms";
import Board from "./components/Board";
import CreateCategory from "./components/CreateCategory";

const Container = styled.div`
  height: 100%;
  width: 100vw;
  max-width: 680px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;
  font-size: 4rem;
  font-weight: 600;
  color: ${(props) => props.theme.btnAccentColor};
`;

const CategoryBoard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(todoState);

  useEffect(() => {
    if (localStorage.getItem(TODO_LIST)) {
      const storage = JSON.parse(localStorage.getItem(TODO_LIST) as string);
      setToDos(storage);
    }
  }, [setToDos]);

  return (
    <Container>
      <Title>
        <h1>To Do List</h1>
      </Title>
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
