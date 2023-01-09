import { useState } from "react"
import ItemAdder from "./ItemAdder.jsx"
import ItemRemover from "./ItemRemover.jsx"


const ItemList = () => {

    const [items, setItems] = useState([
        {
            id:1,
            description:"Quantum Chromodynamics"
        },
        {
            id:2,
            description:"Tuesdays"
        },
        {
            id:3,
            description:"The Kardashians"
        }  
    ])


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