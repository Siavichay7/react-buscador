import { Button } from "primereact";
import React from "react";
import { useTodos } from "../App/useTodos";
import "./CreateTodoButton.css";

export const CreateTodoButton = ({ setOpenModal, openModal }: any) => {
  const onClickButton = () => {
    setOpenModal(!openModal);
  };
  return (
    <Button
      label="+"
      className="p-button-primary button"
      onClick={onClickButton}
    />
  );
};
