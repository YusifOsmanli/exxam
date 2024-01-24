import React, { useContext } from 'react'
import mainContext from '../../context/context'
import Card from '../Card/Card'

const Cards = () => {
    const { data,handleSearch ,handleSorting} = useContext(mainContext)
    return (
        <div className='container'>
            <input type="text" onChange={handleSearch}/>
            <select name="" id="" onChange={handleSorting}> 
                <option value="default">Default</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="09">0-9</option>
                <option value="90">9-0</option>
            </select>
            <div className="row">
                {
                    data.map((item, index) => {
                        return (<div className="col-lg-3" key={index}>
                            <Card item={item}/>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Cards