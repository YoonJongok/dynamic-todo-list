import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { todoState, TODO_LIST } from "../atoms";
import { Button } from "./CreateToDo";
import ToDoList from "./ToDoList";

export interface ICategoryForm {
  category: string;
}

const Form = styled.form`
  width: 80%;
  height: 25px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  input {
    width: 250px;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    padding: 3px 12px;
  }
`;
const SButton = styled(Button)``;

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const [toDos, setTodos] = useRecoilState(todoState);

  const handleValid = ({ category }: ICategoryForm) => {
    setTodos((oldTodos) => {
      localStorage.setItem(
        TODO_LIST,
        JSON.stringify({ ...oldTodos, [category]: [] })
      );
      return { ...oldTodos, [category]: [] };
    });
    setValue("category", "");
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        type="text"
        placeholder="Add the category"
        {...register("category")}
      />
      <SButton type="submit">Add</SButton>
    </Form>
  );
}

export default CreateCategory;
