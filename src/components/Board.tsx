import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, todoState } from "../atoms";
import { ICategoryForm } from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

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

const Area = styled.div`
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
interface IForm {
  toDo: string;
}
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
      <h3>{category}</h3>
      <Area>
        <CreateToDo category={category} />
        <ListContainer>
          {toDos.map((todo, index) => (
            <ToDo key={index} {...todo} />
          ))}
        </ListContainer>
      </Area>
    </SBoard>
  );
}

export default Board;
