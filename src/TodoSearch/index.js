//import { useState } from "react";
import { useContext } from "react"
import { TodoContext } from "../TodoContext"
import "./TodoSearch.css"


const TodoSearch = () => {

    const { searchValue, setSearchValue } = useContext(TodoContext)

    const handleChange = (e) => {

        setSearchValue(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
    }




    return (
        <div className="TodoSearch">
            <div className="search__title">

                <span>To Do</span>
            </div>
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="search" className="search__input"
                >
                    <ion-icon name="search-outline"></ion-icon>
                    <input
                        id="search"
                        type="text"
                        value={searchValue}
                        onChange={handleChange}
                        placeholder="Search to do..."
                    ></input>
                </label>

            </form>
            <div >


            </div>
        </div >
    )
}

export { TodoSearch }
