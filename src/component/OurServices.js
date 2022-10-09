import './Header.css';
import bodyImage from '../assets/img_service.png';
import checklist from '../assets/img_checklist.png'


const OurServices = () => {
    return (
        <div id="OurServices">
            <div className="ourService">
                <div className="dot">
                    <img src={bodyImage} alt="women-in-dot" />
                </div>
                <div className="sub-article-2">
                    <div className="sub-article-2-title">Best Car Rental for any kind of trip in (Lokasimu)</div>
                    <div className='sub-article-2-description'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</div>
                    <div>
                        <div class="flex margin-bottom">
                            <img src={checklist} alt="checklist" />
                            <div className='caption'>Sewa Mobil Dengan Supir di Bali 12 Jam</div>
                        </div>
                        <div class="flex margin-bottom">
                            <img src={checklist} alt="checklist" />
                            <div className='caption'>Sewa Mobil Lepas Kunci di Bali 24 Jam</div>
                        </div>
                        <div class="flex margin-bottom">
                            <img src={checklist} alt="checklist" />
                            <div className='caption'>Sewa Mobil Jangka Panjang Bulanan</div>
                        </div>
                        <div class="flex margin-bottom">
                            <img src={checklist} alt="checklist" />
                            <div className='caption'>Gratis Antar - Jemput Mobil di Bandara</div>
                        </div>
                        <div class="flex">
                            <img src={checklist} alt="checklist" />
                            <div className='caption'>Layanan Airport Transfer / Drop In Out</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default OurServices;