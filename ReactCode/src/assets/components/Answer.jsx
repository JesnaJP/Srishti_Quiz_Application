import { useEffect, useState } from "react";
import MyNavbar from "./navbar";
import axios from "axios";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Result from "./Result";
// const QuestionAnswer = () => {
//     const [technology, setTechnology] = useState("java");//to save selected technology
//     const [Question, setQuestion] = useState([]);
//     const [answers, setAnswers] = useState([]);
//     const [result, setResult] = useState([]);

//     useEffect(() => {
//         axios.get(`http://localhost:8080/question/show/${technology}/all`)
//             .then(response => {
//                 setQuestion(response.data); // Set the resolved data to the state
//                 console.log(response); // log the data that was set to the state.
//             })
//             .catch(error => {
//                 console.error("Error fetching question:", error);
//             });
//     }, []);


//     function handleChange(e) {

//         setTechnology(e.target.value);

//     };


//     const Change = (qid, submittedOption) => {
//         setAnswers((prevAnswers) => ({
//             ...prevAnswers,
//             "qid": qid,
//             "submittedOption": submittedOption,
//         }));
//         console.log(answers);
//     };


//     async function sendDataToServer() {
//       console.log('data to be send',answers);
//        axios.get(`http://localhost:8080/result/show`, answers)
//             .then(response => { 
//                 setResult(response);
//                 console.log(response);
//             })
//             .catch(error => {
//                 console.error("Error submitting the answer:", error);
//             });

//     }

//     const filteredQuestion = technology ? Question.filter((Question) => Question.technology === technology) : Question;//to select single technology questions


//     function submit(e) {
//         e.preventDefault();
//         sendDataToServer()
//         console.log('Question', Question)
//     }

//     return (<>
//         <MyNavbar />

//         <label htmlFor="Technologies">Technologies:</label>
//         <select name="technology" value={technology} onChange={handleChange}>
//             <option value="JavaScript">JavaScript</option>
//             <option value="React">React</option>
//             <option value="Java">Java</option>
//             <option value="Python">Python</option>
//             <option value="DotNet">Dotnet</option>
//             <option value="Angular">Angular</option>
//             <option value="PHP">PHP</option>
//             <option value="MySql">MySql</option>
//             <option value="MongoDB">MongoDB</option>
//         </select>

//         <div className="box">
//             <form onSubmit={submit}>
//                 {filteredQuestion.map((question) => (
//                     <li key={question.qid}>
//                         <Row><Col>qid:</Col> <Col>{question.qid}</Col></Row><br></br>
//                         <Row><Col>technology:</Col> <Col>{question.technology}</Col></Row><br></br>
//                         <Row><Col>Question:</Col> <Col>{question.question}</Col></Row><br></br>


//                         {[question.option1, question.option2, question.option3, question.option4].map((submittedOption, index) => (
//                             <label key={index} style={{ display: "block" }}>
//                                 <input
//                                     type="radio"
//                                     name={`${question.qid} - ${submittedOption}`}
//                                     value={submittedOption}
//                                     checked={answers[question.qid] === submittedOption}
//                                     onChange={() => Change(question.qid, index)}
//                                 />
//                                 {submittedOption}
//                             </label>
//                         ))}
//                         <br />
//                     </li>
//                 ))}
//                 <button className="signup" type="submit">SignUp</button>
//             </form >
//             <Result result={result}/>
//         </div >

//     </>)
// }
// export default QuestionAnswer;
const QuestionAnswer = () => {
    const [technology, setTechnology] = useState("java");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({}); // Changed to object to store answers by qid
    const [results, setResults] = useState([]); // Changed name to plural since it's an array
    const [submitted, setSubmitted] = useState(false); 

    useEffect(() => {
        fetchQuestions();
    }, [technology]); 

    const fetchQuestions = () => {
        axios.get(`http://localhost:8080/question/show/${technology}/all`)
            .then(response => {
                setQuestions(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching question:", error);
            });
    };

    function handleChange(e) {
        setTechnology(e.target.value);
        setSubmitted(false);
    };
    const handleAnswerChange = (qid, submittedOption) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [qid]: submittedOption 
        }));
    };

    async function sendDataToServer() {
        const answersArray = Object.keys(answers).map(qid => ({
            qid: parseInt(qid),
            submittedOption: answers[qid]
        }));

        console.log('data to be sent', answersArray);
        
        try {
            const response = await axios.post(`http://localhost:8080/result/show`, answersArray);
            setResults(response.data);
            setSubmitted(true);
            console.log(response.data);
        } catch (error) {
            console.error("Error submitting the answer:", error);
        }
    }

    function submit(e) {
        e.preventDefault();
        sendDataToServer();
    }

    const filteredQuestions = technology ? 
        questions.filter(question => question.technology === technology) : 
        questions;

    return (
        <>
            <MyNavbar />

            <label htmlFor="Technologies">Technologies:</label>
            <select name="technology" value={technology} onChange={handleChange}>
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

            <div className="box">
                <form onSubmit={submit}>
                    {filteredQuestions.map((question) => (
                        <li key={question.qid}>
                            <Row><Col>qid:</Col> <Col>{question.qid}</Col></Row><br></br>
                            <Row><Col>technology:</Col> <Col>{question.technology}</Col></Row><br></br>
                            <Row><Col>Question:</Col> <Col>{question.question}</Col></Row><br></br>

                            {[question.option1, question.option2, question.option3, question.option4].map((option, index) => (
                                <label key={index} style={{ display: "block" }}>
                                    <input
                                        type="radio"
                                        name={`${question.qid}`}
                                        value={index + 1} // Using index + 1 to match option numbers
                                        checked={answers[question.qid] === index + 1}
                                        onChange={() => handleAnswerChange(question.qid, index + 1)}
                                    />
                                    {option}
                                </label>
                            ))}
                            <br />
                        </li>
                    ))}
                    <button className="signup" type="submit">Submit Answers</button>
                </form>
                {submitted && <Result results={results} />}
            </div>
        </>
    )
}

export default QuestionAnswer;
