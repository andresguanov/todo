import { useState } from "react"

const useLocalStorage = (key, initialValue = []) => {

    const localStorageKey = localStorage.getItem(key)
    let parsedKey;


    if (!localStorageKey) {
        localStorage.setItem(key, JSON.stringify(initialValue))
        parsedKey = initialValue

    } else {
        parsedKey = JSON.parse(localStorageKey)
    }

    //State of content
    const [content, setContent] = useState(parsedKey)

    //saveContent receive a content. This content should convert to string with JSON.stringify
    //After parsedContent was created, save the content in LocalStorage and setContent with the new Content

    const saveContent = (newContent) => {

        const parsedContent = JSON.stringify(newContent)
        localStorage.setItem(key, parsedContent)
        setContent(newContent)
    }


    return [
        content,
        saveContent,
    ]
}

export { useLocalStorage }