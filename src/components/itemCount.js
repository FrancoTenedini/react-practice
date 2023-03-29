

const ItemCount = ({isCounting, setCountNumber}) => {
    return (    
        <div className="container">
            <button onClick={() => setCountNumber(isCounting++)}>+</button>
            <p>{isCounting}</p>
            <button onClick={() => setCountNumber(isCounting--)}>-</button>
        </div>
    )
}

export default ItemCount