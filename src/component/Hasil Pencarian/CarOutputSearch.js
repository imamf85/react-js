import './HasilPencarian.css';
import { Container } from 'react-bootstrap';
import CarImage from '../../assets/car_image.png';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const CarOutputSearch = () => {
    
    const navigate = useNavigate();
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

    const resultData = (detail) => {
        navigate(`/car/${detail.id}`)
    }

    return (
        <Container className="grid" style={{ width: "75%", marginBottom: 200, padding: 0 }}>
            {isLoading
                ? <div>Loading...</div>
                :
                myData.map(detail => {
                return(
                <div key={detail?.id} className='grid-card'>
                    <img src={detail?.image} alt={detail?.name} />
                    <div style={{ fontWeight: 400, fontSize: 14, marginBottom: 8 }}>{detail?.name}</div>
                    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{detail?.price}</div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 24 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                    <button onClick={() => resultData(detail)}>Pilih Mobil</button>
                </div>
                )

                })
            }
        </Container>
    )
}

export default CarOutputSearch;