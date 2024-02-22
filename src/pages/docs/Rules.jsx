import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Rules() {
    return (  
        <div className="generall_page_wrapper">
                <div className="main-content">
                <div className="main any-page"><Header/></div>
                <div className="container">
                    Текст правил пользования сайтом
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Rules;