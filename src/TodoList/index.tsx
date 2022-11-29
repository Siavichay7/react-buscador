import "./TodoList.css";

export const TodoList = (props: any) => {
  const renderFunc = props.children || props.render;
  return (
    <section>
      {props.error && props.onError()}
      {props.error && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}
      {props.searchedTodos.map(renderFunc)}
      <ul className="ul">{props.children}</ul>
    </section>
  );
};
