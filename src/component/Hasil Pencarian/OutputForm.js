import './HasilPencarian.css';
import { Form, Container } from 'react-bootstrap';

const OutputForm = () => {
    return (
        <Container style={{ width: "75%", padding: 24 }} className="outForm">
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Pencarianmu</div>
            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <Form.Group style={{ marginRight: "16px", width: "100%" }} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control type="email" placeholder="Ketik nama/tipe mobil" style={{ borderRadius: "2px" }} />
            </Form.Group>
                <Form.Group style={{ marginRight: "16px", width: "100%", borderRadius: "2px" }} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Kategori</Form.Label>
                    <Form.Select style={{ borderRadius: "2px" }}>
                    </Form.Select>
                </Form.Group>
                <Form.Group style={{ marginRight: "16px", width: "100%", borderRadius: "2px" }} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Harga</Form.Label>
                    <Form.Select style={{ borderRadius: "2px" }}>
                    </Form.Select>
                </Form.Group>
                <Form.Group style={{ marginRight: "16px", width: "100%" }} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Status</Form.Label>
                    <Form.Select style={{ borderRadius: "2px" }}>
                    </Form.Select>
                </Form.Group>
                <button>Edit</button>
            </div>
            
        </Container>
    )
}


export default OutputForm;