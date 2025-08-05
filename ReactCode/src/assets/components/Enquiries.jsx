import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './Enquiries.css';
import MyNavbar from './navbar';
const Enquiries = () => {
  
 const[textarea,settextarea]=useState("");
    
    function handleChange(e) {
        settextarea(
        e.target.value   
        )
        console.log(textarea);
        
    }
   
    function submit(e) {
        e.preventDefault();
        if (textarea=="") {
            alert("No data given");
            return
        }
        sendDataToServer()
        console.log('textarea',textarea);
    }
    return (
        <>
            <MyNavbar />
            <h1 className="enquiry-head">Enquiries</h1>
               <textarea className="textarea" onChange={handleChange} value={textarea} name='textarea' rows='8' cols="70"></textarea>
                <br/><button className="sub" type="submit" onClick={submit}>Submit</button>
        </>
    )
}

export default Enquiries;