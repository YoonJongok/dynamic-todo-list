import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms";

import { Form } from "./CreateToDo";

export interface ICategoryForm {
  category: string;
}

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
