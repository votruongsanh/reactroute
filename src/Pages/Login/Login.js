import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import { dangNhapAction } from '../../redux/actions/NguoiDungAction';

export default function Login(props) {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
          taiKhoan: '',
          matKhau: '',
        },
        validationSchema:Yup.object().shape({
            taiKhoan: Yup.string().required("Tài khoản không được bỏ trống"),
            matKhau: Yup.string().required("Mật khẩu không được bỏ trống").min(1, "mật khẩu tối thiểu 6 ký tự").max(32, "mật khẩu tối đa 32 ký tự"), //.test(/regex/, "mật khẩu không đúng định dạng"),
        }),
        onSubmit: values => {
          console.log("value", values);
          //gọi hàm dangNhapAction => trả về function
          const action = dangNhapAction(values);
          dispatch(action); //
        },
      });

    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3>Đăng nhập</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched && formik.errors.taiKhoan ? <p className="text-danger">{formik.errors.taiKhoan}</p> : ""}
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input className="form-control" name="matKhau" onChange={formik.handleChange} />
                {formik.touched && formik.errors.matKhau ? <p className="text-danger">{formik.errors.matKhau}</p> : ""}
            </div>
            <div className="form-group">
                <button className="btn btn-success">Đăng nhập</button>
            </div>
        </form>
    )
}
