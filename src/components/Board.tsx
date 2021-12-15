import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, todoState, TODO_LIST } from "../atoms";
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

interface IBoardProps {
  toDos: ITodo[];
  category: string;
}

export const TitleArea = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.3em 1rem 0.5em;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    width: 100%;
  }
`;
const Title = styled.h3`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-transform: uppercase;
`;

const BtnArea = styled.span`
  display: flex;
  height: 10%;
  justify-content: flex-end;
  align-items: center;
  /* padding: 0 0 0.4em; */
  padding: 0;
  margin: 0;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.btnBgColor};
  transition: 0.1s ease-in;
  &:hover {
    color: ${(props) => props.theme.btnAccentColor};
  }
`;

function Board({ toDos, category }: IBoardProps) {
  const setToDos = useSetRecoilState(todoState);
  const handleCloseBtn = (event: React.MouseEvent<HTMLSpanElement>) => {
    const targetCategory = event.currentTarget.parentElement?.children[1]
      .textContent as string;
    console.log(targetCategory);
    setToDos((oldToDos) => {
      console.log("THis is old todos: ", oldToDos);
      const filtered = Object.entries(oldToDos).filter(
        (value) => value[0] !== targetCategory
      );
      const newToDos = Object.fromEntries(filtered);
      localStorage.setItem(TODO_LIST, JSON.stringify(newToDos));
      return newToDos;
    });
  };

  return (
    <SBoard>
      <TitleArea>
        <span></span>
        <Title>{category}</Title>
        <BtnArea onClick={handleCloseBtn}>
          <FontAwesomeIcon icon={faWindowClose} />
        </BtnArea>
      </TitleArea>
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
