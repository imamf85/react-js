import './Header.css';
import male from '../assets/male_photo.png';
import female from '../assets/female_photo.png';
import star from '../assets/Rate.png';
import Button from 'react-bootstrap/Button';

const Testimony = () => {
    return (
        <div id="Testimony">
            <div className="article3-title">Testimonial</div>
            <div className="article3-subtitle">Berbagai review positif dari para pelanggan kami</div>
            <div className="carouselHead">
                <div className="item">
                    <img src={male} alt="male" className="face-pic" />
                    <div>
                        <img src={star} alt="bintang" />
                        <div className="item-caption"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</div>
                        <div className="item-signature"> John Dee 32, Bromo</div>
                    </div>
                </div>
                <div className="item">
                    <img src={female} alt="female" className='face-pic' />
                    <div>
                        <img src={star} alt="bintang" />
                        <div className="item-caption"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</div>
                        <div className="item-signature"> John Dee 32, Bromo</div>
                    </div>
                </div>
                <div className="item">
                    <img src={female} alt="female" className='face-pic' />
                    <div>
                        <img src={star} alt="bintang" />
                        <div className="item-caption"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</div>
                        <div className="item-signature"> John Dee 32, Bromo</div>
                    </div>
                </div>
            </div>
            <div className="pagination">
            <Button variant="outline-success" className="rounded-circle">❮</Button>{' '}
            <Button variant="outline-success" className="rounded-circle">❯</Button>{' '}
            </div>
            
        </div>
    )
}

export default Testimony;