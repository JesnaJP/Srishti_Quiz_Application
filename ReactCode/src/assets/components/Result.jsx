// import { useState, useEffect } from "react";
// import StarRating from "./Rating";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import MyNavbar from "./navbar";

// const Result = ({results}) => {
//     const [userid, setuserid] = useState(0);
//     const [username, setusername] = useState("");
//     const [Language, setlanguage] = useState("");
//     const [mark, setMark] = useState(0);
//     const [rate, setRate] = useState(0);
//     useEffect(
//         () => {
//             if (mark > 0 && mark <= 20) {
//                 setRate(1);
//             }
//             else if (mark > 20 && mark <= 40) {
//                 setRate(2);
//             }
//             else if (mark > 40 && mark <= 60) {
//                 setRate(3);
//             }
//             else if (mark > 60 && mark <= 80) {
//                 setRate(4);
//             }
//             else if (mark > 80 && mark <= 100) {
//                 setRate(5);
//             }
//             else {
//                 setRate(0);
//             }
//         }, []
//     );

    

//     async function sendDataToServer() {

//         axios.get(`http://localhost:8080/result/show`, answers)
//             .then(response => {
//                 console.log(response);
//             })
//             .catch(error => {
//                 console.error("Error to show the result:", error);
//             });

//     }


//     return (
//         <>
//             <MyNavbar />
//             <div className="box">
//                 <Row><Col>UserId:</Col> <Col>{userid}</Col></Row><br></br>
//                 <Row><Col>UserName:</Col> <Col>{username}</Col></Row><br></br>
//                 <Row><Col>Language:</Col> <Col>{Language}</Col></Row><br></br>
//                 <Row><Col>Marks:</Col> <Col>{mark}</Col></Row><br></br>
//                 <Row><Col>Rating:</Col> <Col><StarRating rating={rate} /></Col></Row><br></br>
//             </div>
//         </>
//     )
// }
// export default Result;
import { useState, useEffect } from "react";
import StarRating from "./Rating";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from "./navbar";
import { useLocation } from "react-router-dom"; 

const Result = ({ results }) => {
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [rating, setRating] = useState(0);
    const [language, setLanguage] = useState("");

    useEffect(() => {
        if (results && results.length > 0) {
            // Calculate score
            const correctAnswers = results.filter(result => result.correctAnswer).length;
            const total = results.length;
            const percent = Math.round((correctAnswers / total) * 100);

            setScore(correctAnswers);
            setTotalQuestions(total);
            setPercentage(percent);
            setLanguage(results[0]?.technology || ""); 

            // Calculate rating based on percentage
            let calculatedRating = 0;
            if (percent > 80) calculatedRating = 5;
            else if (percent > 60) calculatedRating = 4;
            else if (percent > 40) calculatedRating = 3;
            else if (percent > 20) calculatedRating = 2;
            else if (percent > 0) calculatedRating = 1;

            setRating(calculatedRating);
        }
    }, [results]);
  return (
        <>
            <MyNavbar />
            <div className="box" style={{ padding: '20px', margin: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
                <h2 style={{ marginBottom: '20px' }}>Quiz Results</h2>
                
                <Row className="mb-3">
                    <Col md={3}><strong>Language:</strong></Col>
                    <Col md={9}>{language}</Col>
                </Row>
                
                <Row className="mb-3">
                    <Col md={3}><strong>Score:</strong></Col>
                    <Col md={9}>{score} out of {totalQuestions} correct</Col>
                </Row>
                
                <Row className="mb-3">
                    <Col md={3}><strong>Percentage:</strong></Col>
                    <Col md={9}>{percentage}%</Col>
                </Row>
                
                <Row className="mb-3">
                    <Col md={3}><strong>Rating:</strong></Col>
                    <Col md={9}><StarRating rating={rating} /></Col>
                </Row>

                <div style={{ marginTop: '30px' }}>
                    <h4>Detailed Results:</h4>
                    {results?.map((result, index) => (
                        <div key={index} style={{ 
                            padding: '15px', 
                            marginBottom: '10px', 
                            border: '1px solid #eee',
                            backgroundColor: result.correctAnswer ? '#e8f5e9' : '#ffebee'
                        }}>
                            <Row>
                                <Col md={3}><strong>Question {result.qid}:</strong></Col>
                                <Col md={9}>{result.correctAnswer ? '✓ Correct' : '✗ Incorrect'}</Col>
                            </Row>
                            {!result.correctAnswer && (
                                <>
                                    <Row>
                                        <Col md={3}><strong>Your Answer:</strong></Col>
                                        <Col md={9}>Option {result.submittedOption}</Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}><strong>Correct Answer:</strong></Col>
                                        <Col md={9}>Option {result.correctOption}</Col>
                                    </Row>
                                </>
                            )}
                            {result.explanation && (
                                <Row>
                                    <Col md={3}><strong>Explanation:</strong></Col>
                                    <Col md={9}>{result.explanation}</Col>
                                </Row>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Result;
