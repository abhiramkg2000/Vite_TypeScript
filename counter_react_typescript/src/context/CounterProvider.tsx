import { createContext, ReactElement, useState, useCallback } from "react";

type ChildrenType = { children?: ReactElement | ReactElement[] };

export interface TodoType  {
  userId: number;
  id: number;
  title: string;
  completed: false;
};

export type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  // todos: TodoType[];
  fetchTodos: () => Promise<TodoType[]>;
};

let todos: TodoType[] = [];

const initialCounterContextValue: CounterContextType = {
  count: 0,
  increment: () => {},
  decrement: () => {},
  // todos,
  fetchTodos: () => {
    return new Promise((res) => []);
  },
};

export const CounterContext = createContext<CounterContextType>(
  initialCounterContextValue
);

export function CounterProvider({ children }: ChildrenType): ReactElement {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const fetchTodos = async (): Promise<TodoType[]> => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    console.log(data);
    return data;
    // todos=[data];
  };

  return (
    <CounterContext.Provider
      value={{ count, increment, decrement, fetchTodos }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
