import React from "react";
import { ButtonStyle } from "./Button.style";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  type: "filled" | "outline" | "ghost" | "transparent";
  fullWidth?: boolean;
  disabled?: boolean;
};

const Button = ({ children, onClick, type, fullWidth, disabled }: Props) => {
  return (
    <ButtonStyle
      className={`${type} ${fullWidth}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
