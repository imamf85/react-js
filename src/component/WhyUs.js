import './Header.css';
import { Container, Row, Card } from 'react-bootstrap';
import thumb from '../assets/icon_complete.png'
import hour from '../assets/icon_24hrs.png'
import price from '../assets/icon_price.png'
import profession from '../assets/icon_professional.png'

const WhyUs = () => {
    return (
        <Container id="WhyUs">
                <Row className="mb-4 fw-bold sub-article-2-title">
                    Why Us?
                </Row>
                <Row className="sub-article-2-description mb-5">
                    Mengapa harus pilih Binar Car Rental?
                </Row>
                <Row className="mb-5">
                    <Card style={{ width: '18rem' }} className="me-5">
                        <Card.Body>
                            <img src={thumb} alt="jempol" />
                            <Card.Title className="fw-bold mt-3 mb-3">Mobil Lengkap</Card.Title>
                            <Card.Subtitle className="fw-bold">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="me-5">
                        <Card.Body>
                            <img src={hour} alt="jempol" />
                            <Card.Title className="fw-bold mt-3 mb-3">Harga Murah</Card.Title>
                            <Card.Subtitle className="fw-bold">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="me-5">
                        <Card.Body>
                            <img src={price} alt="jempol" />
                            <Card.Title className="fw-bold mt-3 mb-3">Layanan 24 Jam</Card.Title>
                            <Card.Subtitle className="fw-bold">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <img src={profession} alt="jempol" />
                            <Card.Title className="fw-bold mt-3 mb-3">Sopir Profesional</Card.Title>
                            <Card.Subtitle className="fw-bold">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
    )
}

export default WhyUs;