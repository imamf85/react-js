import '../Header.css';
import Footer from '../Footer';
import Intro from '../Intro';
import FormCarimobil from './FormCarimobil';

const Carimobil = () => {

    return (
        <div>
            <div style={{ marginBottom: "172px" }}>
                <Intro />
            </div>
            <FormCarimobil />
            <Footer />
        </div>
    )
};

export default Carimobil;