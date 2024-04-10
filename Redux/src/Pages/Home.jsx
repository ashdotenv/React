import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../utils/CartSlice'

const Home = () => {
    const dispatch = useDispatch()
    const addingToCart = () => {
        dispatch(addToCart())
    }

    return (

        <div>
            <button className='mt-2 p-2 border rounded' onClick={addingToCart}>Add To Cart</button>
        </div>
    )
}

export default Home