import axios from 'axios';

//file này sẽ tổng hợp tất cả action của ứng dụng
export const layDanhSachPhimApiAction = (maNhom='GP01') => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
                method: "GET",
            });
            //dispatch dữ liệu lên redux
            dispatch({
                type: "SET_MANG_PHIM",
                mangPhim: result.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const layThongTinPhimAction = (maPhim) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
                method: "GET"
            });
            console.log(result.data);
            //sau khi gọi lại api distpatch lên reducer dữ liệu chi tiết phim
            dispatch({
                type: "SET_CHI_TIET_PHIM",
                chiTietPhim: result.data,
            })
        }
        catch (error){
            console.log(error);
        }
    }
}