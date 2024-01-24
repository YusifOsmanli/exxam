import React, { useContext } from 'react'
import mainContext from '../context/context'

const Wishlist = () => {
    const{wish,handleDeleteWishlist}=useContext(mainContext)
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        wish.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.image}</td>
                                    <td><button className='btn btn-danger' onClick={()=>{
                                        handleDeleteWishlist(item)
                                    }}>delete</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default Wishlist