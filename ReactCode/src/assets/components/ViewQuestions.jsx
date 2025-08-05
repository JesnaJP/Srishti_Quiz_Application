import axios from "axios";
import MyNavbar from "./navbar";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useNavigate } from "react-router-dom";
const ViewQuestions = () => {

  const [technology, setTechnology] = useState("");
  const [Question, setQuestion] = useState([{
    qid: "",
    technology: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: ""
  }]);
const navigate = useNavigate();

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    try {
      const res = await axios.get("http://localhost:8080/question/show/all");
      console.log("res", res);
      setQuestion(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  //   console.log("Question", Question);


  function handleChange(e) {

    setTechnology(e.target.value);

  };

  const filteredQuestion = technology ? Question.filter((Question) => Question.technology === technology) : Question;

  return (
    <>
      <MyNavbar />
      <div className="box">

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

        {filteredQuestion.map((question) => (
          <li key={question.qid}>
            <Row><Col>qid:</Col> <Col>{question.qid}</Col></Row><br></br>
            <Row><Col>technology:</Col> <Col>{question.technology}</Col></Row><br></br>
            <Row><Col>Question:</Col> <Col>{question.question}</Col></Row><br></br>
            <Row><Col>Option1:</Col> <Col>{question.option1}</Col></Row><br></br>
            <Row><Col>Option2:</Col> <Col>{question.option2}</Col></Row><br></br>
            <Row><Col>Option3:</Col> <Col>{question.option3}</Col></Row><br></br>
            <Row><Col>Option4:</Col> <Col>{question.option4}</Col></Row><br></br>
            <button
              variant="primary"
              onClick={() => {
                navigate("/EditQuestionBank/" + question.qid);
              }}
              >
                    EditDetails
                  </button>
                            <br />
          </li>
        ))}

      </div >
    </>
  )
}
export default ViewQuestions