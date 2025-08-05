import { useState } from "react";
import './UserRegistration.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigate } from "react-router-dom";
import MyNavbar from "./navbar";
import axios from "axios";

const UserRegistration = () => {
    const [data, setData] = useState({
        
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: "",
        phnum: "",
        address: "",
        skills: [],
        gender: ""

    })
    const options=['Java','React','Python','Angular','MySql'];

    const handleCheckboxChange=(event)=>{
        const{value,checked}=event.target;
        console.log('checked',checked);
        setData((prevState)=>{
            const skills=prevState.skills;
            
            if(checked)
            {
                return{
                    ...prevState,
                    skills:[...skills,value],
                };
            }else{
                return{
                   ...prevState,skills:skills.filter((option)=>option!==value),
                };
            }
        });
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    function submit(e) {
        e.preventDefault();
        const { firstName, lastName, email, password, age, phnum, address, skills, gender } = data;
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
        console.log(age);
        console.log(phnum);
        console.log(address);
        console.log(skills);
        console.log(gender);
        if (!firstName || !lastName || !email || !password || !age || !phnum || !address || !skills || !gender) {
            alert("All fileds are required");
            return
        }
        sendDataToServer()
        console.log('data', data)
    }

    async function sendDataToServer() {
        try {
            const res = await axios.post('http://localhost:8080/api/save', data);
            console.log('res', res);
            if (res.data === "inserted") {
                alert("Registration Successful");
                Navigate('/userlogin')
            } else {
                alert("Registration Failed")
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }

    return (
        <>
            <MyNavbar />
            <h1 className="reg">Registration </h1>
            <div className="box">
                <form onSubmit={submit}>
                    <Row><Col>FirstName:</Col> <Col><input onChange={handleChange} name="firstName" type="firstname" placeholder="Enter your FirstName" /></Col></Row><br></br>
                    <Row><Col>Lastname:</Col> <Col><input onChange={handleChange} name="lastName" type="lastname" placeholder="Enter your Lastname" /></Col></Row><br />
                    <Row><Col>Email:</Col><Col> <input onChange={handleChange} name="email" type="email" placeholder="Enter valid Email" /></Col></Row><br />
                    <Row><Col>Password:</Col> <Col><input onChange={handleChange} name="password" type="password" placeholder="Enter your Password" /></Col></Row><br />
                    <Row><Col>Age:</Col> <Col><input onChange={handleChange} name="age" type="age" placeholder="Please enter your age" /></Col></Row><br />
                    <Row><Col>PhoneNumber:</Col> <Col><input onChange={handleChange} name="phnum" type="phnum" placeholder="Enter your PhoneNumber" /></Col></Row><br />
                    <Row><Col>Address:</Col> <Col><input onChange={handleChange} name="address" type="address" placeholder="Enter permanent Address" /></Col></Row><br />
                    <Row><Col>Gender:</Col> <Col>
                        Male<input onChange={handleChange} className="form-check-input" type="radio" name="gender" id="radioNoLabel1" value="Male" aria-label="..." />&nbsp;&nbsp;

                        Female<input onChange={handleChange} className="form-check-input" type="radio" name="gender" id="radioNoLabel2" value="Female" aria-label="..." /></Col></Row>
                    <br />

                    <Row><Col>Skills:</Col> <Col></Col></Row>
                    {options.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={option}
            checked={data.skills.includes(option)}
            onChange={handleCheckboxChange}
          />
          {option}
        </label>
      ))}
                    <button className="signup" type="submit">SignUp</button>
                </form>
            </div>
        </>
    )
}
export default UserRegistration;