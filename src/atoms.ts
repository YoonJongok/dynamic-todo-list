import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface ITodoState {
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

// export const todoListState = selector({
//   key: "todoListState",
//   get: ({get}) => {

//   }
// });
