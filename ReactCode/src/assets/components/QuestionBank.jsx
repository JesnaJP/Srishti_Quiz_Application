import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import MyNavbar from './navbar';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


const QuestionBank = () => {
    const location = useLocation();
    const message = location.state?.message || "No message passed";
    const [questions, setQuestions] = useState([{
        id: 1,
        Question: "How do you insert COMMENTS in Java code?",
        Option1: "//",
        Option2: "/*",
        Option3: "#",
        Option4: "///",
    },
    {
        id: 2,
        Question: "Which data type is used to create a variable that should store text?",
        Option1: "myString",
        Option2: "string",
        Option3: "String",
        Option4: "Txt"

    },
    {
        id: 3,
        Question: "How do you create a variable with the numeric value 5?",
        Option1: "float x=5",
        Option2: "num x=5",
        Option3: "x=5",
        Option4: "int x=5"

    },
    ])


    useEffect(() => {
        getdata();
    }, []);


    async function getdata() {
        try {
            const res = await axios.get("http://localhost:8080/question/show/all");
            console.log("res", res);
            setQuestions(res.data);
        } catch (error) {
            console.log(error);
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
                    {questions.map((question) => (
                        <li key={question.qid}>
                            <Row><Col>qid:</Col> <Col>{question.qid}</Col></Row><br></br>
                            <Row><Col>technology:</Col> <Col>{question.technology}</Col></Row><br></br>
                            <Row><Col>Question:</Col> <Col>{question.question}</Col></Row><br></br>
                            <Row><Col>Option1:</Col> <Col>{question.option1}</Col></Row><br></br>
                            <Row><Col>Option2:</Col> <Col>{question.option2}</Col></Row><br></br>
                            <Row><Col>Option3:</Col> <Col>{question.option3}</Col></Row><br></br>
                            <Row><Col>Option4:</Col> <Col>{question.option4}</Col></Row><br></br>
                            <br />
                        </li>
                    ))}


                    <button className="signup" type="submit">SignUp</button>
                </form >
            </div >
        </>
    )
}
export default QuestionBank;