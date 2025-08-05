import { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import MyNavbar from "./navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



const EditQuestionBank = (technology) => {
    const [Question, setQuestion] = useState({});
    const id = useParams();

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8080/question/questionbyid/${id.id}`)
            .then(response => {
                setQuestion(response.data); // Set the resolved data to the state
                console.log(response.data); // log the data that was set to the state.
            })
            .catch(error => {
                console.error("Error fetching question:", error);
            });
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setQuestion({
            ...Question,
            [name]: value
        })
    }

    async function sendDataToServer() {
    
        axios.put(`http://localhost:8080/question/edit/${id.id}`,Question)
            .then(response => {
                setQuestion(response); // Set the resolved data to the state
                console.log(response); // log the data that was set to the state.
            })
            .catch(error => {
                console.error("Error editing question:", error);
            });

    }

    function submit(e) {
        e.preventDefault();
        const { technology,question, explanation, option1, option2, option3, option4, correctOption } = Question;
        
        if (!technology|| !question || !explanation || !option1 || !option2 || !option3 || !option4 || !correctOption) {
            alert("All fileds are required");
            return
        }
        sendDataToServer()
        console.log('Question', Question)
    }



    return (
        <>
            <MyNavbar />
            <div className="box">
                <form onSubmit={submit}>

                    <Row><Col>technology:</Col> <Col><input onChange={handleChange} name="technology" value={Question.technology} type="text" /></Col></Row>
                    <Row><Col>question:</Col> <textarea className="textarea" onChange={handleChange} name="question" value={Question.question} rows='8' cols="70"></textarea></Row><br></br>
                    <Row><Col>explanation:</Col> <textarea className="textarea" onChange={handleChange} name="explanation" value={Question.explanation} rows='8' cols="70"></textarea></Row><br></br>
                    <Row><Col>Options:</Col> <Col>

                        <Row><Col>Option1</Col> <Col><input onChange={handleChange} name="option1" value={Question.option1} type="text" /></Col></Row>
                        <Row><Col>Option2</Col> <Col><input onChange={handleChange} name="option2" value={Question.option2} type="text" /></Col></Row>
                        <Row><Col>Option3</Col> <Col><input onChange={handleChange} name="option3" value={Question.option3} type="text" /></Col></Row>
                        <Row><Col>Option4</Col> <Col><input onChange={handleChange} name="option4" value={Question.option4} type="text" /></Col></Row><br></br>
                        <br></br>
                    </Col></Row>
                    <Row><Col>CorrectOption:</Col> <Col><input onChange={handleChange} name="correctOption" value={Question.correctOption} type="correctOption" /></Col></Row>
                    <br />

                    <button className="signup" type="submit">Submit</button>
                </form >
            </div >
        </>
    )

}

export default EditQuestionBank