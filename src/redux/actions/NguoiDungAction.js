import axios from 'axios';
import { history } from '../../App';
import { ACCESSTOKEN, USER_LOGIN } from '../../util/setting';

export const dangNhapAction = (userLogin) => { //{'taiKhoan', 'matKhau'}
    return async (dispatch) => {
        try {
            const result = await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                method: "POST",
                data: userLogin,
            });
            console.log('result', result.data);
            dispatch({
                type: "XU_LY_DANG_NHAP_THANH_CONG",
                tenDangNhap: result.data.taiKhoan,
            })

            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
            localStorage.setItem(ACCESSTOKEN, result.data);

            alert("Đăng nhập thành công !");
            history.push("/home");

        } catch (error) {
            console.log('errors', error.respone?.data); //?. optionalchaining
        }
    }
}

export const datVe = (thongTinDatVe) => {
    // {
    //     "maLichChieu": 0,
    //     "danhSachVe": [
    //       {
    //         "maGhe": 0,
    //         "giaVe": 0
    //       }
    //     ],
    //     "taiKhoanNguoiDung": "string"
    //   }

    return async (dispatch) => {
        try {
            let result = axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
                method: "POST",
                data: thongTinDatVe,
                headers: {"Authorization" : "Bearer " + localStorage.getItem(ACCESSTOKEN)}
            })
            console.log(result.data);
        } catch (errors) {
            console.log(errors.respone?.data);
        }
    }
}