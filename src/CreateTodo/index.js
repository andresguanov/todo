import "./CreateTodo.css"

const CreateTodo = ({
    onConfirmTodo,
    onCreateTodo,
    setNewTodo,
}) => {

    const handleSubmit = (e) => {
        e.preventDefault()


    }

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }

    return (
        <div className="CreateTodo">
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="todoInput"
                    className="title">
                    Create your To Do
                </label>
                <input
                    id="todoInput"
                    className="todoInput"
                    onChange={handleChange}

                    type="text"
                    placeholder="Create your To Do here ..."
                />
                <div className="buttons">
                    <button
                        className="buttons__cancel"
                        onClick={onConfirmTodo}
                    >
                        <span>Cancel</span>
                    </button>
                    <button
                        className="buttons__add"
                        onClick={onCreateTodo}
                    >
                        <span>Add</span>
                    </button>

                </div>


            </form>
        </div>
    )
}

export { CreateTodo }