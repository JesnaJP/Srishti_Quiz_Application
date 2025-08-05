import {NavLink } from "react-router-dom";
import MyNavbar from "./navbar";
import { Outlet } from "react-router-dom";

const AdminDashboard=()=>
    {
      

        return(
            <>
         <MyNavbar />
        <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline"  >
                                Home</span> </a>
                        <ul className="collapse show nav flex-column ms-4" id="submenu1" data-bs-parent="#menu">
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline"></span></a>
                                    <NavLink to="/Enquiries">Enquiries</NavLink>
                                    
                            </li>
                        </ul>
                    </li>


                   
                   
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                         </a>
                               <NavLink to="/Result">Rating</NavLink>
                    </li>



                    
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                             </a>
                            <NavLink to="/users">Users</NavLink>
                    </li>



                    <li>
                        <a href="#submenu4" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            </a>
                            <NavLink to="/EditQuestionbank">Edit QuestionBank</NavLink>
                            <ul className="collapse nav flex-column ms-4" id="submenu4" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">JavaScript</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">React</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Java</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Python</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Dotnet</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Angular</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">PHP</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">MySql</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">MongoDB</span></a>
                            </li>
                        </ul>
                    </li>

                    </ul>
                <hr/>

                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://picsum.photos/200/300" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                        <span className="d-none d-sm-inline mx-1">Jesna</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col py-3">
            <Outlet/>
        </div>
    </div>
</div>
        </>
        )
    }
    export default AdminDashboard;
    