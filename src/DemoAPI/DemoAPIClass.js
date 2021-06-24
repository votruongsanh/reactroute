import React, { Component } from 'react';
import axios from 'axios';
import { result } from 'lodash';

export default class DemoAPIClass extends Component {
    state = {
        mangPhim: [],
    }
    loadPhim = async () => {
        //cách 1: sử dụng promise
        //hàm gọi api lấy dữ liệu từ backend trả về
        // const promise = axios({
        //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        //     method: "GET",
        // });
        // //hàm xử lý dữ liệu khi gọi request thành công
        // promise.then(result => {
        //     console.log("result", result.data);
        //     this.setState({
        //         mangPhim: result.data
        //     })
        //     // console.log("mangPhim", mangPhim);
        // });
        // //hàm xử lý dữ liệu khi gọi request thất bại
        // promise.catch(errors => {
        //     console.log(errors.response.data);
        // });

        //cách 2: sử dụng async await (dùng api phụ thuộc nhau xử lý bất đồng bộ)
        try {
            const result = await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
                method: "GET",
            });
            this.setState({
                mangPhim: result.data
            });
        } catch (error) {
            console.log("errors", error.reponse.data);
        }
    }
    renderPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return (
                <div className="col-4 mt-4" key={index}>
                    <div className="card text-left">
                        <img className="card-img-top" src={phim.hinhAnh} alt={phim.tenPhim} width="250" height="300" />
                        <div className="card-body">
                            <h4 className="card-title">{phim.tenPhim}</h4>
                            <p className="card-text">{phim.moTa}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                {/* <button className="btn btn-success" onClick={
                    () => {
                        this.loadPhim()
                    }
                }>Load danh sách phim</button> */}
                <h3 className="text-center">Danh sách phim</h3>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.loadPhim();
    }
}
