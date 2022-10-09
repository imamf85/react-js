import NavigationBar from "../NavigationBar";
import OutputForm from "./OutputForm";
import Footer from '../Footer';
import CarOutputSearch from "./CarOutputSearch";

const PencarianMu = () => {
    return (
        <div>
            <div style={{background: "#F1F3FF", height: "266px", marginBottom: "120px"}}>
            <NavigationBar />
            </div>
            <div>
            <OutputForm />
            <CarOutputSearch />
            </div>
            <Footer />
        </div>
    )
}

export default PencarianMu;