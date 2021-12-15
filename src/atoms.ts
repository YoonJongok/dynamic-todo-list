import { atom } from "recoil";

export const TODO_LIST = "TODO_LIST";
export interface ITodo {
  id: number;
  text: string;
}

export interface ITodoState {
  [key: string]: ITodo[];
}

export const todoState = atom<ITodoState>({
  key: "todoState",
  default: {
    TO_DO: [],
    DOING: [],
    DONE: [],
  },
});
