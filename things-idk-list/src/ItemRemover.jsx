const ItemRemover = (props) => {

    const {setItems, id} = props
    
    return (
            <button className="removeItemButton"
                onClick={() => setItems((currentItems) => {
                return [...currentItems].filter( item => item.id !== id)
            })}>Remove</button>
    )
}

export default ItemRemover