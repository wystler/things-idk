import { useEffect, useState, useRef } from "react"
import ItemAdder from "./ItemAdder.jsx"
import ItemRemover from "./ItemRemover.jsx"


const ItemList = () => {

    const [items, setItems] = useState (() => {

    const storedItems = localStorage.getItem("items")
        return JSON.parse(storedItems)||[]
    })

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items])

    const dragItem = useRef()
    const dragOverItem = useRef()

    const dragStart = (e, position) => {
        dragItem.current = position;
        };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        if (e.target.id === "listItem")
        e.target.className = `items highlight`
        };

    const dragLeave = (e, position) => {
        dragOverItem.current = position;
        if (e.target.id === "listItem")
        e.target.className = `items nolight`
        };

    const drop = (e) => {
        const copyListItems = [...items];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setItems(copyListItems);
    };


    return (
        <div>
            <ItemAdder setItems={setItems}/>
            <ul className="itemList">
                {items.map((item, index) => {
                    return (
                    <div className="items" key={item.id} 
                    draggable id="listItem"
                    onDragStart={(event) => dragStart(event, index)}
                    onDragEnter={(event) => dragEnter(event, index)}
                    onDragLeave={(event) => dragLeave(event, index)}
                    onDragEnd={drop}>
                    <li className="item">
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