import { useState } from "react";
import MyNavbar from "./navbar";
import { useNavigate } from "react-router-dom";
import './Adminlogin.css';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const AdminLogin = () => {
    const [adminemail,adminpassword]=["Jayaprakash@gmail.com","JP*1"]

    const [data, setdata] = useState({//one object
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    function handleChange(e) {
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value
        })
        
    }
  

    const submit = (e) => {
        e.preventDefault();
        const email = data.email;
        const password = data.password;
        console.log(email,"email")
        console.log(password,"password")
        if (!email || !password) {
            alert("All fields are required")
        }
        sendDataToServer()
        console.log('data', data);
    }

    async function sendDataToServer() {
        try {
            //const res = await axios.post('http://localhost:8080/api/login', data);
           // console.log('resp', res);
            //console.log('data', res.data);
            //if (res.data === 'Matched') {
               // console.log("Login successful")
               // navigate('/')
            //}
            if(adminemail==data.email && adminpassword==data.password)
            {
                alert("Login successful")
                navigate('/AdminDashboard')
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }


    return (
        <>
            <MyNavbar />

            <h1 className="heading">Admin Login</h1>
            <div className="login-box">
                <form onSubmit={submit}>
                    <Row><Col>Email:</Col> <Col><input onChange={handleChange} name="email" type="Email" placeholder="Enter valid Email" /></Col></Row><br></br>
                    <Row><Col>Password:</Col> <Col><input onChange={handleChange} name="password" type="Password" placeholder="Enter the password" /></Col></Row><br></br>
                    <a href="https://www.google.com/" target="_blank">forget password?</a>
                    <button className="van" type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default AdminLogin;