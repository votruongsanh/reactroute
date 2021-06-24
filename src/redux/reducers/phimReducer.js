
const stateDefault = {
    mangPhim: [
        {
            "maPhim": 1329,
            "tenPhim": "Bố Già",
            "biDanh": "bo-gia",
            "trailer": "https://www.youtube.com/embed/IHNzOHi8sJs",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia_gp01.jpg",
            "moTa": "Tui Chưa Coi Nên Chưa Biết",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-04-03T20:30:24.247",
            "danhGia": 10
        },
    ],

    chiTietPhim: {

    }
}

export const PhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "SET_MANG_PHIM": {
            // state.mangPhim = action.mangPhim;
            return { ...state, mangPhim: action.mangPhim };
        }; break;

        case "SET_CHI_TIET_PHIM": {
            state.chiTietPhim = action.chiTietPhim;
            return { ...state };
        }; break;

        default: {
            return { ...state };
        }
    }
}