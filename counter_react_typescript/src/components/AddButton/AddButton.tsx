import React, { ReactNode } from "react";

type AddButtonProps = {
  increment: () => void;
  children: ReactNode;
};

function AddButton({ increment, children }: AddButtonProps) {
  return <button onClick={increment}>{children}</button>;
}

export default AddButton;
