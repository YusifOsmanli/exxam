import React, { useContext } from 'react'
import mainContext from '../../context/context'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    const { handleAddToWishlist } = useContext(mainContext)
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={item.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/${item._id}`}>
                            {item.name}</Link> </h5>
                    <p className="card-text">{item.price}</p>
                    <button className="btn btn-primary" onClick={() => {
                        handleAddToWishlist(item)
                    }}>Add To Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default Card