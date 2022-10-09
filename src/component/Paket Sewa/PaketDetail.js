import PencarianMu from "../Hasil Pencarian/PencarianMu"
import PaketSewa from "./PaketSewa";
import NavigationBar from "../NavigationBar";
import OutputForm from '../Hasil Pencarian/OutputForm'
import Footer from '../Footer';

const PaketDetail = () => {
    return(
        <div>
            <div style={{background: "#F1F3FF", height: "266px", marginBottom: "120px"}}>
            <NavigationBar />
            </div>
            <div>
            <OutputForm />
            <PaketSewa />
            </div>
            <Footer />
        </div>
    )
}

export default PaketDetail;