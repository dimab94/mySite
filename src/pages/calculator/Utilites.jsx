import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import StopWatch from "./Stop-watch";


function Calculator() {
    return ( 
        <div className="generall_page_wrapper">
            <div className="main-content">
                <div className="any-page"><Header/></div>
                <div className="container">
                    <StopWatch/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Calculator;