import { useState } from 'react';
import { ConfirmDelete } from '../ConfirmDelete';
import { CreateTodo } from '../CreateTodo';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';

import './App.css';


function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1')

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [searchValue, setSearchValue] = useState("")
  const [todos, setTodos] = useState(parsedTodos)
  const [deleted, setDeleted] = useState(false)
  const [created, setCreated] = useState(false)
  const [indexTodo, setIndex] = useState("")
  const [newTodo, setNewTodo] = useState("")

  localStorage.setItem('TODOS_V1', JSON.stringify(todos))


  let listTodos = [...todos]
  searchValue && (
    listTodos = todos.filter(todo => (
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

  const handleConfirmTodo = () => {
    created ? setCreated(false) : setCreated(true)
  }

  const handleCreateTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        title: newTodo,
        completed: false
      }
    ])
    setCreated(false)
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
          (listTodos.length > 0)
            ? (
              listTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  searchValue={searchValue}
                  todo={todo}
                  onCompletedTodo={handleCompletedTodo}
                  onConfirmDelete={handleConfirmDelete}


                />

              )))
            : (
              <h3>Create your first Todo ...
              </h3>

            )
        }





      </TodoList>
      <CreateTodoButton onCreateTodo={handleConfirmTodo} />
      {
        deleted
        && <ConfirmDelete
          onDeletedTodo={handleDeleteTodo}
          indexTodo={indexTodo}
          todos={todos}
          setTodos={setTodos}
        />
      }
      {created
        && <CreateTodo
          onConfirmTodo={handleConfirmTodo}
          onCreateTodo={handleCreateTodo}
          setNewTodo={setNewTodo}

        />
      }




    </div>
  );
}

export default App;
