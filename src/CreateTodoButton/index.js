import { useContext } from "react"
import { TodoContext } from "../TodoContext"
import "./CreateTodoButton.css"

const CreateTodoButton = () => {

    const { handleConfirmTodo: onCreateTodo } = useContext(TodoContext)

    return (

        <div className="CreateTodoButton">
            <button
                onClick={onCreateTodo}
            >
                <ion-icon name="add-outline"></ion-icon>
            </button>

        </div>


    )
}

export { CreateTodoButton }