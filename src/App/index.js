import { useState } from 'react';
import { ConfirmDelete } from '../ConfirmDelete';
import { CreateTodo } from '../CreateTodo';
import { CreateTodoButton } from '../CreateTodoButton';
import { data } from '../data';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';

import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [todos, setTodos] = useState([...data])
  const [deleted, setDeleted] = useState(false)
  const [indexTodo, setIndex] = useState("")



  let listTodos = [...todos]
  searchValue && (
    listTodos = data.filter(todo => (
      todo.title.includes(searchValue)
    ))

  )

  const handleCompletedTodo = (todoCompleted) => {
    setTodos(todos.map(todo => {
      if (todo.id === todoCompleted.id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      } else {
        return todo
      }
    }))
  }


  const handleConfirmDelete = (todoDelete) => {


    deleted ? setDeleted(false) : setDeleted(true)
    setIndex(todoDelete.id)

  }

  const handleDeleteTodo = (confirm) => {

    if (confirm) {
      setTodos(todos.filter(todo => todo.id !== indexTodo))
      setDeleted(false)
    } else {
      setDeleted(false)
    }

  }

  return (
    <div className="App">
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoCounter
        todos={todos}
      />

      <TodoList >
        {

          listTodos.map(todo => (
            <TodoItem
              key={todo.id}
              searchValue={searchValue}
              todo={todo}
              onCompletedTodo={handleCompletedTodo}
              onConfirmDelete={handleConfirmDelete}


            />

          ))

        }
      </TodoList>
      <CreateTodoButton />
      {
        deleted && <ConfirmDelete
          onDeletedTodo={handleDeleteTodo}
          indexTodo={indexTodo}
          todos={todos}
          setTodos={setTodos}
        />
      }
      {/*<CreateTodo />*/}




    </div>
  );
}

export default App;
