import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, todoState } from "../atoms";
import { ICategoryForm } from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const SBoard = styled.div`
  height: 400px;
  width: 220px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
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
  flex-grow: 1;
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
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  input {
    width: 100%;
    height: 100%;
  }
`;

function Board({ toDos, category }: IBoardProps) {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  // const category = useRecoilValue(categoryState);
  const setToDos = useSetRecoilState(todoState);

  const handleValid = ({ toDo }: IForm) => {
    if (!toDo) return;
    setToDos((oldTodos) => {
      const newTodo = {
        id: Date.now(),
        text: toDo,
      };
      return { ...oldTodos, [category]: [newTodo, ...oldTodos[category]] };
    });
    setValue("toDo", "");
  };
  console.log(toDos);

  return (
    <SBoard>
      <h3>{category}</h3>
      <Area>
        <Form onSubmit={handleSubmit(handleValid)}>
          <input type="text" placeholder="Add the task" {...register("toDo")} />
          <button type="submit">Add</button>
        </Form>
        <ul>
          {toDos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))}
        </ul>
      </Area>
    </SBoard>
  );
}

export default Board;
