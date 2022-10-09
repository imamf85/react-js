import { Container, Col, Row } from 'react-bootstrap';
import './Header.css';

const FAQ = () => {

    return (
        <div style={{ marginBottom: "150px" }} id="FAQ">
            <Container className="d-flex">
                <Col>
                    <Row style={{ fontWeight: 700, fontSize: "24px", marginBottom: "16px" }}>Frequently Asked Question</Row>
                    <Row style={{ fontWeight: 700, fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Row>
                </Col>
                <Col>
                    <div>
                        <select className="dd-button">
                            <option disabled selected>Apa saja syarat yang dibutuhkan?</option>
                        </select>
                        <select className="dd-button">
                            <option disabled selected>Berapa hari minimal sewa mobil lepas kunci?</option>
                        </select>
                        <select className="dd-button">
                            <option disabled selected>Berapa hari sebelumnya sebaiknya booking sewa mobil?</option>
                        </select>
                        <select className="dd-button">
                            <option disabled selected>Apakah Ada biaya antar-jemput?</option>
                        </select>
                        <select className="dd-button">
                            <option disabled selected>Bagaimana jika terjadi kecelakaan</option>
                        </select>
                    </div>
                </Col>
            </Container>
        </div>
    )
};

export default FAQ;