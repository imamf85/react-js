
import './Header.css';
import logo from '../assets/car.png';
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';

const Intro = (props) => {

    return (
        <div className="background bg-grey-white">
            <NavigationBar />
            <div className="Intro">
                <div className="leftSide">
                    <div className="title">Sewa & Rental Mobil Terbaik di</div>
                    <div className="title">kawasan (Lokasimu)</div>
                    <div className="subtitle">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas<br />
                        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br />
                        untuk sewa mobil selama 24 jam.</div>
                    <Link to="/carimobil" style={{textDecoration: "none"}}>
                        <button className="buttonGreen" style={{ display: props.withButton ? "block" : "none" }}>
                            Mulai Sewa Mobil
                        </button>
                    </Link>
                </div>
                <div>
                    <div className="blueBox">
                    </div>
                    <img src={logo} alt="mercedes benz" className="car" />
                </div>
            </div>
        </div>

    )
}

export default Intro;