import "./CreateTodo.css"

const CreateTodo = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // const handleClick = (e) => {
    //     console.log("hola")
    // }

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
                    type="text"
                    placeholder="Create your To Do here ..."
                />
                <div className="buttons">
                    <button
                        className="buttons__cancel"
                    >
                        <span>Cancel</span>
                    </button>
                    <button
                        className="buttons__add"
                    >
                        <span>Add</span>
                    </button>

                </div>


            </form>
        </div>
    )
}

export { CreateTodo }