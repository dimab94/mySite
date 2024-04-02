import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Refund() {
    return (  
        <div className="generall_page_wrapper">
            <div className="main-content">
            <div className="any-page"><Header/></div>
            <div className="container">
                Текст условий возврата платежа
            </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Refund;