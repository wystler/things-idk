import { useState } from "react"

const ItemAdder = (props) => {

    const {setItems} = props
    const [newItem, setNewItem] = useState("")

    const handleSubmit = () => {

    }

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