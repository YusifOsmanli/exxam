import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ROOT from './ROUTER/front.routes';
import mainContext from './context/context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const root = createBrowserRouter(ROOT)


// import { Provider } from 'react';

function App() {
  const [data, setData] = useState([])
  const [original, setOriginal] = useState([])

  const [wish, setWish] = useState(localStorage.getItem('getWish') ? JSON.parse(localStorage.getItem('getWish')) : [])
  useEffect(() => {
    axios.get(`http://localhost:3030/products`).then(res => {
      setData(res.data)
      setOriginal(res.data)

    })
  }, [])

  const handleSearch = (e) => {
    const searching = e.target.value.trim().toLowerCase()
    if (searching == '') {
      setData([...original])
    } else {
      const search = data.filter(item => item.name.trim().toLowerCase().includes(searching))
      setData([...search])
    }
  }
  const handleSorting = (e) => {
    const sorting = e.target.value
    if (sorting == "default") {
      setData([...original])
    } else if (sorting == "az") {
      const sortaz = data.sort((a, b) => a.name.localeCompare(b.name))
      setData([...sortaz])
    }
    else if (sorting == "za") {
      const sortza = data.sort((a, b) => b.name.localeCompare(a.name))
      setData([...sortza])
    } else if (sorting == "09") {
      const sort09 = data.sort((a, b) => a.price - b.price)
      setData([...sort09])
    } else if (sorting == "90") {
      const sort90 = data.sort((a, b) => b.price - a.price)
      setData([...sort90])
    }
  }

  const handleAddToWishlist = (item) => {
    const target = wish.find(prod => prod._id == item._id)
    if (target) {
      toast.error('item wishde var')
    } else {
      setWish([...wish, item])
      localStorage.setItem('getWish', JSON.stringify([...wish, item]))
      toast.success('elave olundu')
    }
  }

  const handleDeleteWishlist = (item) => {
    const target = wish.find(product => product._id == item._id)
    const indexOf = wish.indexOf(target)
    wish.splice(indexOf, 1)
    setWish([...wish])
    localStorage.setItem('getWish', JSON.stringify([...wish]))
    toast.success('silindi')
  }

  const yuska = {
    data, setData, wish, setWish, handleDeleteWishlist, handleAddToWishlist, handleSearch,handleSorting
  }

  return (


    <div className="App">
      <mainContext.Provider value={yuska}>
        <RouterProvider router={root} />
        <Toaster />
      </mainContext.Provider>
    </div>

  );
}

export default App;
