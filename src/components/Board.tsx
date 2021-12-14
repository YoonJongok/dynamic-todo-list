import React from "react";
import styled from "styled-components";
import { ITodo } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";

const SBoard = styled.div`
  width: 320px;
  background-color: ${(props) => props.theme.boardBgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  margin-bottom: 2rem;
  overflow: hidden;
  h3 {
    margin: 10px;
  }
`;

const BoardArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

interface IBoardProps {
  toDos: ITodo[];
  category: string;
}

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Form = styled.form`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  input {
    width: 100%;
    height: 100%;
  }
`;
const ListContainer = styled.ul`
  width: 100%;
  min-height: 320px;
`;

function Board({ toDos, category }: IBoardProps) {
  return (
    <SBoard>
      <CategoryTitle>{category}</CategoryTitle>
      <BoardArea>
        <CreateToDo category={category} />
        <ListContainer>
          {toDos.map((todo, index) => (
            <ToDoList key={index} {...todo} categoryTitle={category} />
          ))}
        </ListContainer>
      </BoardArea>
    </SBoard>
  );
}

export default Board;
