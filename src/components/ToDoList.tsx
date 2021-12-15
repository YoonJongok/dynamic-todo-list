import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, todoState, TODO_LIST } from "../atoms";

const List = styled.li`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 0.5em;

  span:first-child {
    margin: 0 1.2em;
    color: #130f40;
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 0.2em;
  }
  span:last-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 1em;
  }
`;

const Button = styled.button`
  padding: 0.5em 1em 0.3em;
  margin: 0 0.5em 0.5em 0;
  border: rgba(255, 255, 255, 0);
  border-radius: 2em;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  background-color: #ffbe76;

  &:hover {
    border: 0.16em solid rgba(255, 255, 255, 1);
    background-color: #f0932b;
  }
`;

interface ITodoListProps {
  id: number;
  text: string;
  categoryTitle: string;
}

function ToDoList({ categoryTitle, id, text }: ITodoListProps) {
  const [toDos, setToDos] = useRecoilState(todoState);

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetCategory = event.currentTarget.value;
    const { parentElement } = event.currentTarget;
    const targetLiName = parentElement?.parentElement?.firstChild
      ?.textContent as string;

    setToDos((oldTodos) => {
      //1. grab the obj from the list
      //2. remove that obj from the list
      //3. find the targetedCategory from the OldTodos
      //4. insert obj to the targed Category
      const listCopy = [...oldTodos[categoryTitle]];
      const taskObj = listCopy.find(
        (val) => val.text === targetLiName
      ) as ITodo;

      const removedlist = listCopy.filter((val) => val !== taskObj);
      const targetedList = [...oldTodos[targetCategory]];
      const insertedDataList = [...targetedList, taskObj];
      localStorage.setItem(
        TODO_LIST,
        JSON.stringify({
          ...oldTodos,
          [targetCategory]: [...insertedDataList],
          [categoryTitle]: [...removedlist],
        })
      );
      return {
        ...oldTodos,
        [targetCategory]: [...insertedDataList],
        [categoryTitle]: [...removedlist],
      };
    });
  };

  return (
    <List>
      <span>{text}</span>
      <span>
        {Object.keys(toDos).map(
          (category, index) =>
            category !== categoryTitle && (
              <Button onClick={handleOnClick} key={index} value={category}>
                {category}
              </Button>
            )
        )}
      </span>
    </List>
  );
}

export default ToDoList;
