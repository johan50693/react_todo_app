import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoHeader } from '../TodoHeader';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo, 
  } = useTodos();
  
  return (
    <>
    <TodoHeader loading={loading} >
      <TodoCounter 
        totalTodos = {totalTodos}
        completedTodos = {completedTodos}
        // loading={loading} 
      />
      <TodoSearch 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
          // loading={loading} 
      />
    </TodoHeader>


    <TodoList 
      error={error} 
      loading={loading} 
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      onError={ () => <TodosError />}
      onLoading={() => <TodosLoading />}
      onEmptyTodos={()=> <EmptyTodos />}
      onEmptySearchResults={
        (searchText)  => <p>No hat resultados para {searchText}</p>
      }
      // render={ todo => (
      //   <TodoItem
      //     error={error}
      //     loading={loading}
      //     searchedTodos={searchedTodos}
      //     key={todo.text}
      //     text={todo.text}
      //     completed={todo.completed}
      //     onComplete={() => completeTodo(todo.text)}
      //     onDelete={() => deleteTodo(todo.text)}
      //   />
      //   )
      // }
    >
      { 
        todo => (
          <TodoItem
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )
      }

    </TodoList>
    

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default App;