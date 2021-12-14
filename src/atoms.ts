import { atom, selector, useRecoilValue } from "recoil";

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

export const todoSelector = selector<ITodoState>({
  key: "todoListSelector",
  get: ({ get }) => {
    // const storage = JSON.parse(localStorage.getItem(TODO_LIST) as string);
    // console.log(" storage this is storage", storage);
    // const toDos = storage ?? get(todoState);
    // return { ...toDos };

    const toDos = get(todoState);
    return toDos;
  },
  set: ({ set }, newValue) => {
    console.log("New Value is ", newValue);
    set(todoState, newValue);
  },
});
