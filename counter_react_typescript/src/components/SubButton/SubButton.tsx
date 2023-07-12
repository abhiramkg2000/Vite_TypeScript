import React, { ReactNode } from "react";

type SubButtonProps = {
  decrement:()=>void
  children: ReactNode;
};

function SubButton({ decrement, children }: SubButtonProps) {
  return <button onClick={decrement}>{children}</button>;
}

export default SubButton;
