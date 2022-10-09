import './Carimobil.css';
import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const FormCarimobil = () => {
    const [name, setName] = useState('');
    const [kategori, setKategori] = useState('');
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
            .then((response) => {
                console.log(response);
                const filteredData = response.data.filter(detail => {
                    return detail.name != null
                })
                setMyData(filteredData);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsError(error.message)
                alert(error.message)
            }) 
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formSubmit = {name, kategori};
        e.filter((datum) => {
            return (datum.name.toLowerCase().includes(formSubmit)
            );
        });
    }
    const navigate = useNavigate();
    const pencarian = () => {
        navigate("/hasilpencarianmu")
    }

    return (
        <div>

            <Container className="formCariMobil" style={{ width: "75%", padding: 24 }} onSubmit={handleSubmit}>
                <Form.Group style={{ marginRight: "16px", width: "100%" }} controlId="formBasicEmail">
                    <Form.Label>Nama Mobil</Form.Label>
                    <Form.Control type="email" placeholder="Ketik nama/tipe mobil" 
                    style={{ borderRadius: "2px" }} value={name} onChange={(e) => setName(e.target.value)}  />
        
                </Form.Group>
                <Form.Group style={{ marginRight: "16px", width: "100%", borderRadius: "2px" }} controlId="formBasicEmail">
                    <Form.Label>Kategori</Form.Label>
                    <Form.Select style={{ borderRadius: "2px" }} value={kategori} onChange={(e) => setKategori(e.target.value)}>
                        <option selected>Masukan Kapasitas Mobil</option>
                        <option>2 - 4 orang</option>
                        <option>4 - 6 orang</option>
                        <option>6 - 8 orang</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group style={{ marginRight: "16px", width: "100%", borderRadius: "2px" }} controlId="formBasicEmail">
                    <Form.Label>Harga</Form.Label>
                    <Form.Select style={{ borderRadius: "2px" }}>
                        <option selected>Masukan Harga Sewa per Hari</option>
                        <option>&#60; Rp. 400.000</option>
                        <option>Rp. 400.000 - Rp. 600.000</option>
                        <option>&#62; Rp. 600.000</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group style={{ marginRight: "16px", width: "100%" }} controlId="formBasicEmail">
                    <Form.Label>Status</Form.Label>
                    <Form.Select style={{ borderRadius: "2px" }}>
                        <option selected>Disewa</option>
                        <option>disewakan</option>
                    </Form.Select>
                </Form.Group>


                <button className='button-cari-mobil' onClick={() => pencarian()}>
                    Cari Mobil
                </button>


            </Container>
        </div>
    )
}

export default FormCarimobil;