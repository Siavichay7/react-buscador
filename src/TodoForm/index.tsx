import { Button, InputTextarea } from "primereact";
import React from "react";
import { useTodos } from "../App/useTodos";
import "./TodoForm.css";

export const TodoForm = ({ addTodo, setOpenModal }: any) => {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  // const {  } = useTodos();

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>CREAR TODO</label>
      <InputTextarea
        value={newTodoValue}
        rows={5}
        cols={30}
        autoResize
        onChange={onChange}
      />
      <br />
      <div className="grid gap-4 grid-cols-2">
        <div>
          <Button
            icon="pi pi-times"
            className="p-button-rounded p-button-danger"
            type="button"
            onClick={onCancel}
          >
            Cancelar
          </Button>
        </div>

        <div>
          <Button
            icon="pi pi-check"
            className="p-button-rounded p-button-success"
            type="submit"
          >
            Agregar
          </Button>
        </div>
      </div>
    </form>
  );
};
