import { Container } from 'react-bootstrap';
import './Header.css';

const CTA = () => {
    return (
        <div>
            <Container className="card-background">
                <div >
                    <div className="card-content">
                        <div className="cardTitle">Sewa Mobil di (Lokasimu) Sekarang</div>
                        <div className="cardSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                        <button className="buttonGreen">Mulai Sewa Mobil</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CTA;