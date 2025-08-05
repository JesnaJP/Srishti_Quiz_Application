import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import MyNavbar from "./navbar";
const Jobs = () => {
    return (
        <><MyNavbar/>
            <Container>
                <Row>
                    <Col>
                        <h2>BackEnd Developer:</h2>
                        proficient programming languages like Python, Java, or Ruby, database management systems (like MySQL, PostgreSQL), web server technologies, APIs, frameworks specific to your chosen language, version control systems (like Git), understanding of software design principles, and familiarity with cloud platforms like AWS or Azure; focusing on key areas like data structures, algorithms, security practices, and scalability depending on the project needs.
                    </Col>

                    <Col><h2>FrontEnd Developer:</h2>
                        HTML, CSS, and JavaScript as these are the core building blocks of web development, along with understanding responsive design principles, version control systems like Git, and potentially familiarizing yourself with front-end frameworks like React or Angular depending on the role and industry demands.
                    </Col>

                </Row>
                <br></br>
                <Row>
                    <Col>
                        <h2>QA Engineer:</h2>
                        the fundamentals of software development, manual and automated testing techniques, familiarity with common QA tools and frameworks, alongside developing strong analytical thinking, problem-solving, and effective communication skills; key areas of study include understanding the Software Development Life Cycle (SDLC), test case design, defect management, Agile methodologies, and depending on the role, some programming knowledge for automation testing.
                    </Col>
                    <Col>
                        <h2>Security Engineer:</h2>
                        networking, system administration, operating systems, cryptography, security protocols, threat analysis, risk assessment, penetration testing, coding (especially in languages like Python), cloud security, and stay updated on emerging threats and best practices in cybersecurity, while also considering relevant certifications like CompTIA Security+, CISSP, or CEH to validate your skills. 
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <h2>Data Engineer:</h2>
                        core programming languages like Python, Java, or Scala, gain proficiency in SQL for database management, understand big data technologies like Hadoop and Spark, learn ETL (Extract, Transform, Load) tools like Apache Airflow or NiFi, familiarize yourself with cloud platforms like AWS, Azure, or Google Cloud, and have knowledge of data warehousing solutions like Redshift or BigQuery                    </Col>
                    <Col>
                        <h2>Cloud Computing:</h2>
                        cloud architecture, network management, database management, programming languages (like Python, Java), cloud security, cloud service platforms (like AWS, Azure, GCP), application programming interfaces (APIs), and essential skills in areas like development and operations (DevOps), machine learning, and data analytics. </Col>
                </Row>
            </Container>
        </>
    )
}
export default Jobs;