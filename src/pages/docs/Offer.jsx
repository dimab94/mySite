import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../legal/legal.css"

function Offer() {
    return (  
        <div className="generall_page_wrapper">
            <div className="main-content">
                <div className="main any-page"><Header/></div>
                <div className="container">
                    Текст договора
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Offer;