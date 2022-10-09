import { Container } from 'react-bootstrap';
import './PaketSewa.css';
import CarImage from '../../assets/car_image.png';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const PaketSewa = () => {

    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
            .then((response) => {
                console.log(response);
                setMyData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsError(error.message)
                alert(error.message)
            }) 
    }, []);
    console.log(myData);
    return (
        <Container className="grid-sewa" style={{ width: "75%", padding: 0, marginBottom: 40 }}>
            <div style={{padding: 24}}>
                <p style={{fontWeight: 700, fontSize: 14}}>Tentang Paket</p>
                <div>
                    <p style={{fontWeight: 700, fontSize: 14}}>Include
                    </p>
                    <ul style={{fontWeight: 700, fontSize: 14, color: "#8A8A8A"}}>
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li> Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                    </ul>
                </div>
                <div>
                    <p style={{fontWeight: 700, fontSize: 14}}>Exclude</p>
                    <ul style={{fontWeight: 700, fontSize: 14, color: "#8A8A8A"}}>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                </div>
                <div>
                    <p style={{fontWeight: 700, fontSize: 14}}>Refund, Reschedule, Overtime</p>
                    <ul style={{fontWeight: 700, fontSize: 14, color: "#8A8A8A"}}>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    </ul>

                </div>
            </div>
            <div style={{padding: 24, height: "80%"}} >
                <img src={myData.image} alt={myData.name} />
                <p>{myData.name}</p>
                <p>6 - 8 orang</p>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p>Total</p>
                    <p>{myData.price}</p>
                </div>
            </div>
        </Container>
    )
}

export default PaketSewa;