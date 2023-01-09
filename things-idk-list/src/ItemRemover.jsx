const ItemRemover = (props) => {

    const {setItems, id} = props
    return (
        <div>
            <button onClick={() => setItems((currentItems) => {
                return [...currentItems].filter( item => item.id !== id)
            })}>Remove</button>
        </div>
    )
}

export default ItemRemover