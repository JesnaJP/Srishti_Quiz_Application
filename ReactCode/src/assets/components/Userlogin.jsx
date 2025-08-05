import { useState } from "react";
import MyNavbar from "./navbar";
import { useNavigate } from "react-router-dom";
import './Userlogin.css';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { NavLink, Link } from "react-router";
import axios from "axios";


const UserLogin = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
   
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        const {email, password} = data;
        if (!email || !password) {
            alert("All fields are required")
        }
        sendDataToServer()
        console.log('data', data);
    }

    async function sendDataToServer() {
        try {
            const res = await axios.post('http://localhost:8080/api/userlogin', data);
            console.log('resp', res);
            console.log('data', res.data);
            if (res.data === 'Matched') {
                console.log("Login successful")
                navigate('/')
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }


    return (
        <>
            <MyNavbar />
            <img src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" className="img" alt="Can't reload image" />
            <div className="logbox">
                <h1 className="heading1">User Login</h1>
                <form onSubmit={submit}>
                    <Row><Col>Email:</Col> <Col><input onChange={handleChange} name="email" type="Email" placeholder="Enter valid Email" /></Col></Row><br></br>
                    <Row><Col>Password:</Col> <Col><input onChange={handleChange} name="password" type="Password" placeholder="Enter the password" /></Col></Row><br></br>
                    <a href="https://www.google.com/" target="_blank">forget password?</a>
                    <NavLink to="/signup">Register</NavLink>
                    <button className="van" type="submit">Login</button>
                </form>
            </div>

        </>
    )
}

export default UserLogin;