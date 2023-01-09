import { useState } from "react"

const ItemAdder = (props) => {

    const {setItems} = props
    const [newItem, setNewItem] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newItem)
        setItems((currentItems) => {
            return [...currentItems, {id:Math.max(...currentItems.map( item => item.id > 0 ? item.id : 0))+1, description:newItem}]
        })
        setNewItem("")}

    return (
        <form className="itemAdder"
            onSubmit={handleSubmit}>
            <label className="itemAdderLabel">
                Add a new item:
                <input
                className="itemAdderBox"
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}>
                </input>
            </label>
            <button className="itemAdderButton" type="submit">Add thing</button>
        </form>
    )
}

export default ItemAdder