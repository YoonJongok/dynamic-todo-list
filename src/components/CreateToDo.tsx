import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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
  input {
    width: 100%;
    height: 100%;
  }
`;

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  // const category = useRecoilValue(categoryState);
  const setToDos = useSetRecoilState(todoState);

  const handleValid = ({ toDo }: IForm) => {
    if (!toDo) return;
    // setToDos((oldTodos) => {
    //   return [{ id: Date.now(), text: toDo, category }, ...oldTodos];
    // });
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input type="text" placeholder="Add the task" {...register("toDo")} />
      <button type="submit">Add</button>
    </Form>
  );
}

export default CreateToDo;
