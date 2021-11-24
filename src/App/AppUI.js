import { useContext } from 'react';
import { ConfirmDelete } from '../ConfirmDelete';
import { CreateTodo } from '../CreateTodo';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';

const AppUI = () => {
    const {
        created,
        deleted,
        listTodos,
    } = useContext(TodoContext)

    return (
        <div className="App">
            <TodoSearch />
            <TodoCounter />

            <TodoList >

                {
                    (listTodos.length > 0)
                        ? (
                            listTodos.map(todo => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                />

                            ))
                        )
                        : (
                            <h3>There aren't todos.<br /> Please create your To Do ...
                            </h3>

                        )
                }

            </TodoList>

            <CreateTodoButton />

            {deleted && <ConfirmDelete />}

            {created && <CreateTodo />}

        </div>
    )
}

export { AppUI }