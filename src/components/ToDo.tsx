import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ITodo, todoState } from "../atoms";

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
  background-color:  ${(props) => props.theme.btnBgColor}

  &:hover {
     border: 0.16em solid rgba(255, 255, 255, 1);
    background-color: ${(props) => props.theme.btnAccentColor}
  }
`;

function ToDo({ id, text }: ITodo) {
  const toDos = useRecoilValue(todoState);
  return (
    <List>
      <span>{text}</span>
      <span>
        {Object.keys(toDos).map((category, index) => (
          <Button key={index}>{category}</Button>
        ))}
      </span>
    </List>
  );
}

export default ToDo;
