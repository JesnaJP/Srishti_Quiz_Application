import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './navbar';

const Home = () => {


    return (
        <>
        <MyNavbar/>
        <Container >
            <Row className='mt-5'>
                <Col><iframe width="700" height="490" src="https://www.youtube.com/embed/Th9KrXZgSVc?si=AsFaghm4tWFJa6j7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
                <Col className='fs-6'><h2>Computer technology is used in many ways in the modern world, including:</h2>
                    Robotics: Makes business processes faster, more efficient, and less expensive,
                    Quantum computing: Uses quantum bits, or qubits, to solve challenges at the atomic and subatomic levels,
                    Edge computing: Positions data processing closer to the sources of data creation to solve inefficiencies in cloud-based computing,
                    Autonomous vehicles: Uses AI to learn from data, identify patterns, and make autonomous decisions,
                    Virtual reality: Can be used in education to make reading more immersive and spark imagination,
                    Generative AI: A type of AI that can create new content, such as images, videos, and articles,
                    Education: Technology has made remote and digital learning possible, and has enriched personalized learning,
                    Marketing: Basic computer skills can be used to create marketing materials,
                    Social media: Basic computer skills can be used to manage social media accounts,
                    Online fundraising: Basic computer skills can be used to create online fundraising campaigns,
                    Traffic control: Computers are used in traffic control services,
                    Infrastructure development: Computers are used in infrastructure development,
                    Defense: Computers help launch missiles and rockets,
                    Health and medical: Computers are used to keep track of patient records, diagnosis, X-rays, and monitoring.
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>Today, computer technology is involved in almost every facet of human activity, yet this technology is still considered to be in its infancy. This observation is especially true for the use of computer technologies in the clinical environment. Computers have essentially revolutionized the practice of medicine by:

                    •
                    Providing completely new insights into the anatomy and physiology of the human organism through computerized imaging techniques.

                    •
                    Facilitating patient surveillance and the delivery of controlled medication in intensive-care units.

                    •
                    Assisting health professionals in various aspects of clinical decision making using advances in artificial intelligence technology.

                    •
                    Optimizing the collection, retrieval and display of a wide range of patient-related information through automation of the clinical laboratories and development of hospital information systems (Jenkins, 1978; Bronzino, 1982; Anbar, 1987; Shortliffe et al., 1990).The light weight, high-speed computational capability is ideally suited for use in aircraft and is being exploited in many ways.
                    Individual computers presently being used for systems such as flight controls, navigation, air data, and threat detection can easily be replaced by a single sophisticated computer which integrates those functions and many more. This new technology is undoubtedly the one that will singularly have the most far-reaching effects on crew systems in both the near term and the long term.
                </Col>
                <Col><iframe width="680" height="458" src="https://www.youtube.com/embed/CMS728YNHmo?si=ybfZx4J7KpwMHrl5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
            </Row>
        </Container>
</>
    )
}
export default Home;