import { useEffect, useState } from "react"
import ItemAdder from "./ItemAdder.jsx"
import ItemRemover from "./ItemRemover.jsx"


const ItemList = () => {

    const [items, setItems] = useState (() => {

    const storedItems = localStorage.getItem("items")
        return JSON.parse(storedItems)
    })

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items])


    return (
        <div>
            <ItemAdder setItems={setItems}/>
            <ul className="itemList">
                {items.map((item) => {
                    return (
                    <div className="items">
                    <li className="item" key={item.id}>
                        <ItemRemover setItems={setItems} id={item.id}/>
                        {item.description}
                    </li>
                    </div>)
                })}
            </ul>
        </div>
    )
}

export default ItemList