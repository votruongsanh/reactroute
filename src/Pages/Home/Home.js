import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { layDanhSachPhimApiAction } from '../../redux/actions/PhimActions';
import { NavLink } from 'react-router-dom';

import { Carousel } from 'antd';

const contentStyle = {
    height: '250px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function Home(props) {
    //useSelector: dùng để lấy state từ redux về
    const { mangPhim } = useSelector(state => state.PhimReducer);
    const dispatch = useDispatch();

    // UseEffect là hàm chạy sau khi dữ liệu render
    useEffect(async () => {
        dispatch(layDanhSachPhimApiAction('GP02'));
    }, []);

    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return (
                <div className="col-4 mt-4" key={index}>
                    <div className="card text-left">
                        <img className="card-img-top" src={phim.hinhAnh} alt={phim.tenPhim} width="250" height="300" />
                        <div className="card-body">
                            <h4 className="card-title">{phim.tenPhim}</h4>
                            <p className="card-text">{phim.moTa}</p>

                            <NavLink className="btn btn-danger" to={`/detail/${phim.maPhim}`}>Đặt vé</NavLink>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="container">
            <div className="mt-5">
                <Carousel autoplay>
                    <div>
                        <div style={contentStyle}>
                            <img src="https://picsum.photos/200" style={{height:"250px", width:"100%"}} alt="123" />
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <img src="https://picsum.photos/200" style={{height:"250px", width:"100%"}} alt="123" />
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <img src="https://picsum.photos/200" style={{height:"250px", width:"100%"}} alt="123" />
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <img src="https://picsum.photos/200" style={{height:"250px", width:"100%"}} alt="123" />
                        </div>
                    </div>
                </Carousel>
            </div>

            <h3 className="text-center">Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
