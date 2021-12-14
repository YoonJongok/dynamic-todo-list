import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "../atoms";

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
`;

const Input = styled.input`
  width: 80%;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  padding: 3px 12px;
`;

const Button = styled.button`
  padding: 0.5em 1em 0.3em;
  border: rgba(255, 255, 255, 0);
  border-radius: 2px;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  cursor: pointer;
  /* transition: all 0.2s; */
  background-color: ${(props) => props.theme.btnBgColor}
  &:hover {
     border: 0.16em solid rgba(255, 255, 255, 1);
    background-color: ${(props) => props.theme.btnAccentColor}
  }
`;

interface ICreateToDoProps {
  category: string;
}

function CreateToDo({ category }: ICreateToDoProps) {
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
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Input type="text" placeholder="Add the task" {...register("toDo")} />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default CreateToDo;
