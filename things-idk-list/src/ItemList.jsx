import { useEffect, useState, useRef } from "react"
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
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

    return (
        <div>
            <ItemAdder setItems={setItems}/>
                <DragDropContext>
                    <Droppable droppableId="itemList">
                        {(provided) => (
                        <ul className="itemList" {...provided.droppableProps} ref={provided.innerRef}>
                            {items.map((item, index) => {
                                return (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                        <li className="items" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <ItemRemover setItems={setItems} id={item.id}/>
                                            {item.description}
                                        </li>
                                )}
                                </Draggable>)
                            })}
                        </ul>
                        )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default ItemList