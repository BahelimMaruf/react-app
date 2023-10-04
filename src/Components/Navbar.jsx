import React from 'react'
import {Link, BrowserRouter, Routes, Route} from "react-router-dom"
import TableForm from './Table/TableForm'
import PasswordGenerator from './PasswordGenerator/PasswordGenerator'
import { Home } from './Home'
import Todo from './Todo/Todo'


export const Navbar = () => {
    return (
        <BrowserRouter>
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                               <Link to="/" style={{textDecoration:'none'}}>  <a className="nav-link active" aria-current="page" href="/">Home</a></Link>
                            </li>

                            <li className="nav-item">
                               <Link to="/TableForm" style={{textDecoration:'none'}}> <a className="nav-link" href="/">TableForm</a></Link>
                            </li>

                            <li className="nav-item">
                               <Link to="/Passwordgenerator" style={{textDecoration:'none'}}> <a className="nav-link" href="/">PasswordGenerator</a></Link>
                            </li>

                            <li className="nav-item">
                               <Link to="/Todo" style={{textDecoration:'none'}}> <a className="nav-link" href="/">Todo</a></Link>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>

                    </div>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/TableForm' element={<TableForm />} />
                <Route path='/PasswordGenerator' element={<PasswordGenerator />} />
                <Route path='/Todo' element={<Todo />} />
            </Routes>
        </>
        </BrowserRouter>
    )
}