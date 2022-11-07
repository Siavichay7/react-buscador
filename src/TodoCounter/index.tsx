import "./TodoCounter.css";

export const TodoCounter = ({total, completed}: any) => {
    return (
        <h2 className="texto">Has completado {completed} de {total} TODOs</h2>
    )
}