import { useContext } from "react"
import { TodoContext } from "../TodoContext"
import "./TodoCounter.css"

const TodoCounter = () => {

    const { todos } = useContext(TodoContext)

    const completedTodos = todos.filter(todo => todo.completed)
    return (
        <main className="TodoCounter">
            <h2>You have completed {completedTodos.length} of {todos.length} ToDo's</h2>
        </main>
    )
}

export { TodoCounter }