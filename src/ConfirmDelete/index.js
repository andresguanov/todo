import { useContext } from "react"
import { TodoContext } from "../TodoContext"
import "./ConfirmDelete.css"

const ConfirmDelete = () => {

    const { handleDeleteTodo: onDeletedTodo } = useContext(TodoContext)
    return (
        <div className="ConfirmDelete">
            <div className="confirm-container">
                <h4>Do you secure to delete this toDo?</h4>
                <button
                    className="confirmButton"
                    onClick={() => onDeletedTodo(true)}
                >Yes
                </button>
                <button
                    className="cancelButton"
                    onClick={() => onDeletedTodo(false)}
                >No
                </button>

            </div>

        </div>
    )
}

export { ConfirmDelete }