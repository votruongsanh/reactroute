import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const { tenDangNhap } = useSelector(state => state.NguoiDungReducer);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink activeClassName='text-danger'
                            activeStyle={{ backgroundColor: '#fff', color: '#000' }}
                            className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        {tenDangNhap.trim() !== '' ? <NavLink to='/' className="nav-link">{tenDangNhap}</NavLink> : <NavLink activeClassName='text-danger'
                            activeStyle={{ backgroundColor: '#fff', color: '#000' }}
                            className="nav-link" to="/login">Login</NavLink>}
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='text-danger'
                            activeStyle={{ backgroundColor: '#fff', color: '#000' }}
                            className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='text-danger'
                            activeStyle={{ backgroundColor: '#fff', color: '#000' }}
                            className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/demousestate">Use State</NavLink>
                            <NavLink className="dropdown-item" to="/demouseeffect">Use Effect</NavLink>
                            <NavLink className="dropdown-item" to="/apiclass">API Class</NavLink>
                            <NavLink className="dropdown-item" to="/apifunction">API Function</NavLink>
                            <NavLink className="dropdown-item" to="/detail/:id">Detail</NavLink>
                        </div>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
        </nav>
    )
}
