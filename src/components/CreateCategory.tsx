import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "../atoms";

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
  button {
    padding: 0.5em 1em 0.3em;
    border: rgba(255, 255, 255, 0);
    border-radius: 2px;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #ffffff;
    text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    text-align: center;
    transition: all 0.2s;
    background-color: ${(props) => props.theme.btnBgColor}

    &:hover {
       border: 0.16em solid rgba(255, 255, 255, 1);
      background-color: ${(props) => props.theme.btnAccentColor}
    }
  }
`;

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const setTodos = useSetRecoilState(todoState);
  const handleValid = ({ category }: ICategoryForm) => {
    setTodos((oldTodos) => {
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
      <button type="submit">Add</button>
    </Form>
  );
}

export default CreateCategory;
