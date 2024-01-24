import React, { useContext } from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import mainContext from '../context/context';

const Add = () => {
    const { data, setData } = useContext(mainContext)

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            image: '',
        },
        onSubmit: values => {
            axios.post('  http://localhost:3030/products', values).then(res => {
                setData([...data, res.data])
            })
            formik.resetForm()
        },
    });
    return (
     <div>
        <section className="form">
               <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name"> Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />

            <label htmlFor="price">Price</label>
            <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
            />

            <label htmlFor="image">image</label>
            <input
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.image}
            />

            <button type="submit">Submit</button>
        </form>
        </section>
        <section className="addPageTable">
        <table class="table">
  <thead>
    <tr>
    <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
  {
    data.map((item,index)=>{
        return(
            <tr key={index}> 
            <th scope="row">{index+1}</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.image}</td>
          </tr>
        )
    })
  }

  </tbody>
</table>
        </section>
     </div>
    );
}

export default Add