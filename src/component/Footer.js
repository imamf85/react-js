import { Container, Row, Col } from 'react-bootstrap';
import socialMedia from '../assets/social_media.png';
import './Header.css';

const Footer = () => {
    return (
        <div style={{background: "white"}}>
            <Container className="d-flex" style={{ marginBottom: "100px" }}>
                <Col style={{ fontWeight: 700, fontSize: "14px", marginRight: "86px" }}>
                    <Row style={{ marginBottom: "16px" }}>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</Row>
                    <Row style={{ marginBottom: "16px" }}>binarcarrental@gmail.com</Row>
                    <Row>081-233-334-808</Row>
                </Col>
                <Col style={{ fontWeight: 400, fontSize: "14px" }}>
                    <Row style={{ marginBottom: "16px" }}>Our services</Row>
                    <Row style={{ marginBottom: "16px" }}>Why Us</Row>
                    <Row style={{ marginBottom: "16px" }}>Testimonial</Row>
                    <Row>FAQ</Row>
                </Col>
                <Col style={{marginLeft: 0}}>
                    <Row style={{ fontWeight: 700, fontSize: "14px", marginBottom: "16px" }}>Connect with us</Row>
                    <img src={socialMedia} alt="list_of_logos" className="socialMediaLogo" />
                </Col>
                <Col>
                <Row style={{ fontWeight: 700, fontSize: "14px", marginBottom: "16px" }}>Copyright Binar 2022</Row>
                <Row className="brand"></Row>
                </Col>
            </Container>
        </div>
    )
}

export default Footer;