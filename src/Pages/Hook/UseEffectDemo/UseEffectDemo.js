import React, {useState, useEffect} from 'react'

export default function UseEffectDemo() {
    const [number, setNumber] = useState(1);
    //hook thay thế cho lifecycleComponentDidmount
    useEffect(() => { //tự động kích hoạt và chạy lần đầu tiên
        //call api
        //sử dụng carousel, thư viện khác...
        console.log('componentDidmount');
        return ()=>{
            //hàm này sẽ thực thi trước khi component mất khỏi giao diện
            console.log('componentWillUnmount');
        }
    }, []);

    useEffect (() =>{
        //gọi sau mỗi lần render kể cả lần đầu tiên
        console.log('thay thế 2 life cycle componentDidMount và componentDidUpdate');
        //hạn chế setState
    });

    useEffect (() =>{
        //gọi sau mỗi lần render kể cả lần đầu tiên
        console.log('componentDidUpdate bởi 1 state nào đó');
        //hạn chế setState
    },[number]);
    return (
        <div>
            use effect
            <h1>{number}</h1>
            <button className="btn btn-success" onClick={()=>{
                setNumber(number + 1);
            }}>+</button>
        </div>
    )
}
