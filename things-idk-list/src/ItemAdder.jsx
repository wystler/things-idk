import { useState } from "react"

const ItemAdder = (props) => {

    const {setItems} = props
    const [newItem, setNewItem] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setItems((currentItems) => {
            return [{id:Math.max(...currentItems.map( item => item.id > 0 ? item.id : 0))+1, description:newItem}, ...currentItems]
        })
        setNewItem("")}

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}>
                </input>
            </label>
            <button type="submit">Add thing</button>
        </form>
    )
}

export default ItemAdder