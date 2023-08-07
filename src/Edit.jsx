import React, { useCallback, useState } from 'react'
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Edit = (props) => {
    const navigate = useNavigate();
    const { editdata } = props;
    console.log(editdata, "editdata")
    const [editTitle, setEditTitle] = useState(editdata.title)
    const [editPrice, setEditPrice] = useState(editdata.price)
    const [NewId, setNewId] = useState(editdata.id)
    console.log("Edit data", props.editdata)
    const handleclick = () => {
        const fetchData = async () => {
            await axios.put(`https://dummyjson.com/products/${NewId}`, {
                title: editTitle,
                price: editPrice,
            }).then((res) => {
                console.log(res.data.products)
                navigate('/')
            }).catch(() => { alert("error") })

        }
        fetchData();
    }
    const handleclickInc = useCallback(() => {
        setEditPrice(parseFloat(editPrice + 100))
    }, [editPrice])
    const handleclickDec = useCallback(() => {
        setEditPrice(parseFloat(editPrice - 100))
    }, [editPrice])
    return (
        <div>
            <h1>Edit</h1>
            <label>Title :</label>
            <Input placeholder=" Title " value={editTitle}
                onChange={(e) => {
                    setEditTitle(e.target.value)
                }} />
            <span></span>
            <label>Price:</label>
            <Input placeholder='Price' value={editPrice}
                onChange={(e) => {
                    setEditPrice(parseFloat(e.target.value))
                    // setVal(val)
                }}
            />
            <button onClick={handleclick}> UPDATE </button>
            <button onClick={handleclickInc}>INCREEMENT</button>
            <button onClick={handleclickDec}>DECREEMENT</button>
        </div>
    )
}

export default Edit