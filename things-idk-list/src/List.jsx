import ItemAdder from "./ItemAdder.jsx"
import ItemRemover from "./ItemRemover.jsx"

const List = () => {
    return (
        <div>
            <ItemAdder />
            <ul className="itemList">
                <li>
                    <ItemRemover />
                </li>
            </ul>


        </div>
    )
}

export default List