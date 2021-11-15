import "./TodoSearch.css"

const TodoSearch = () => {
    return (
        <div class="TodoSearch">
            <div class="search__title">

                <span>To Do</span>
            </div>

            <label
                htmlFor="search" class="search__input"
            >
                <ion-icon name="search-outline"></ion-icon>
                <input
                    id="search"
                    type="text"
                    placeholder="Search to do..."
                ></input>
            </label>
            <div >


            </div>
        </div >
    )
}

export { TodoSearch }
