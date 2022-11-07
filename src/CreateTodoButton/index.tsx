import { Button } from "primereact"

export const CreateTodoButton = () => {
    const onClickButton = (text: string) => {
        alert(text)
    }
    return (
        <Button 
            label="+" className="p-button-primary" 
            onClick={() => onClickButton("Aqui deberia abrir un modal")}
        />
    )
}