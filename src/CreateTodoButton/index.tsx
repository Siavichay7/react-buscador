import { Button } from "primereact"
import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
    const {
        setOpenModal,
        openModal,
    } = React.useContext(TodoContext);
    const onClickButton = () => {
        setOpenModal(!openModal);
    }
    return (
        <Button 
            label="+" className="p-button-primary button" 
            onClick={onClickButton}
        />
    )
}