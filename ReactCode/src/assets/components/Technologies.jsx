import { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import MyNavbar from "./navbar";
import axios from "axios";

const Technologies = () => {
    const [technologies, setTechnologies] = useState(["JavaScript,React,Java,Python,Dotnet,Angular,PHP,MySql,MongoDB"]);//Array of Strings
    const [Question, setQuestion] = useState({//Array of Objects
        technology: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctOption: "",
        explanation: ""
    });


    function handleChange(e) {
        const { name, value } = e.target;
        setQuestion({
            ...Question,
            [name]: value
        })

    };

    function handleTechnology(e) {
        setFormData({ ...Question, [e.target.technology]: e.target.value });

    };


    async function SendDataToServer() {
        try {
            const res = await axios.post('http://localhost:8080/question/create',Question);
            console.log('res', res);
            if (res.data === "Inserted question and answer" ) {
                alert("Question added");

            } else {
                alert("Question cannot be added")
            }
        }
        catch (error) {
            console.log('error', error);
        }

    }


    function submit(e) {
        e.preventDefault();
        alert(`Technologies:${Question.technology}`);
        const { technology, question, option1, option2, option3, option4, correctOption,explanation } = Question;
        console.log('Question', Question);


        if (!explanation || !technology || !question || !option1 || !option2 || !option3 || !option4 || !correctOption) {
            alert("All fileds are required");
            return
        }
        SendDataToServer();
        console.log('Question', Question);
    }



    return (
        <>
            <MyNavbar />
            <div className="box">
                <form onSubmit={submit}>

                    <label htmlFor="Technologies">Technologies:</label>
                    <select name="technology" value={Question.technology} onChange={handleChange}>
                        <option selected>Default</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="React">React</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                        <option value="DotNet">Dotnet</option>
                        <option value="Angular">Angular</option>
                        <option value="PHP">PHP</option>
                        <option value="MySql">MySql</option>
                        <option value="MongoDB">MongoDB</option>
                    </select>

                    <Row><Col>question:</Col> <textarea className="textarea" onChange={handleChange} name="question" value={Question.question} rows='8' cols="70"></textarea></Row><br></br>
                    <Row><Col>explanation:</Col> <textarea className="textarea" onChange={handleChange} name="explanation" value={Question.explanation0} rows='8' cols="70"></textarea></Row><br></br>
                    <Row><Col>Options:</Col> <Col>

                        <Row><Col>Option1</Col> <Col><input onChange={handleChange} name="option1" value={Question.option1} type="text" /></Col></Row>
                        <Row><Col>Option2</Col> <Col><input onChange={handleChange} name="option2" value={Question.option2} type="text" /></Col></Row>
                        <Row><Col>Option3</Col> <Col><input onChange={handleChange} name="option3" value={Question.option3} type="text" /></Col></Row>
                        <Row><Col>Option4</Col> <Col><input onChange={handleChange} name="option4" value={Question.option4} type="text" /></Col></Row><br></br>
                        <br></br>
                    </Col></Row>
                    <Row><Col>CorrectOption:</Col> <Col><input onChange={handleChange} name="correctOption" type="correctoption" /></Col></Row>
                    <br />

                    <button className="signup" type="submit">SignUp</button>
                </form >
            </div >
        </>
    )


}

export default Technologies;