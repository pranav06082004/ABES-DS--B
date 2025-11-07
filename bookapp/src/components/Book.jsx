import React from 'react'
import './Book.css'
import { useState } from 'react'

function Book(props) {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
  
  return (
    <div id='book'>
        <img src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=" alt="" height={180} width={180}/>
        <h1>Title:{props.title}</h1>
        <h1>Price:{props.price}</h1>

        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Book
