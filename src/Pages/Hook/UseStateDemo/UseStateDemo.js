import React, { useState } from 'react'

//useState(): là hàm từ thư viện react thay thế this.state và this.setState của ReactClassComponent
export default function UseStateDemo(props) {

    const [state, setState] = useState({ number: 1 });
    /** ví dụ: khai báo bên react class component
     * this.state = {
        number: 1
        }
     */
    const [number, setNumber] = useState(1);
    return (
        <div className='container'>
            <h1 className='text-danger'>Number: {number}</h1>
            <button className='btn btn-success' onClick={() => {
                setNumber(number+1)
            }}>+</button>
            
            <h1>{state.number}</h1>
            <button className='btn btn-success' onClick={() =>{
                // const newState = {number: state.number + 1} ;
                // setState(newState);
                setState({
                    number: state.number + 1,
                })
            }}>+</button>
        </div>
    )
}
