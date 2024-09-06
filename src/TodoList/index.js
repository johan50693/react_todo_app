import React from 'react';
import './TodoList.css'

function TodoList({
  error, 
  loading, 
  searchedTodos, 
  onError, 
  onLoading, 
  onEmptyTodos, 
  render, 
  totalTodos,
  onEmptySearchResults,
  searchValue,
  children,
}) {

  const renderType = children || render;
  return (
    <section>
        {error && onError()}
        {loading && onLoading() }
        {(!loading && !searchedTodos) && onEmptyTodos ()}

        {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchValue)}
        {searchedTodos.map(renderType)}
       
    </section>
  );
}

export { TodoList };
