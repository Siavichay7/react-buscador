import "./TodoList.css";

export const TodoList = (props: any) => {
    return (
        <section>
            <ul className="ul">
                {props.children}
            </ul>
        </section>
    )
}