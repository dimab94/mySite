import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function Payment() {
    
    const items = [{value:'About',href:'#about'},{value:'Coach',href:'#coach'},{value:'Programs',href:'#programs'},{value:'Payment',href:''}]

    return ( 
        <div className="generall_page_wrapper">
            <div className="main"><Header/></div>
            <div className="container">
                Касса для оплаты
            </div>
            <Footer/>
        </div>
    );
}

export default Payment;