import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
    const {id}=useParams()
    const [detail,setDetail]=useState({})
    useEffect(()=>{
axios.get(`http://localhost:3030/products/${id}`).then((res)=>{
    setDetail(res.data)
})
    },[])
    console.log(detail)
  return (
    <div>
        <h1>{detail?.name}</h1>
    </div>
  )
}

export default Detail