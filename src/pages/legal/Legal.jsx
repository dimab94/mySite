import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./legal.css"

function Legal() {
    return (  
        <div className="generall_page_wrapper">
            <div className="main-content">
                <div className="any-page"><Header/></div>
                <div className="container section">
                    <p className="legal_title">С&nbsp;помощью этого сайта вы&nbsp;можете сделать свои первые шаги в&nbsp;спорте на&nbsp;выносливость. Чтобы узнать правила пользования сайтом, какие сведения собираются и&nbsp;как они используются, и&nbsp;другую информацию, внимательно изучите эти документы.</p>
                    <ul className="legal_list">
                        <li><Link className="legal_link" to={'/rules'}>Правила пользования сайтом</Link></li>
                        <li><Link className="legal_link" to={'/privacy'}>Политика конфиденциальности</Link></li>
                        <li><Link className="legal_link" to={'/offer'}>Договор оферты</Link></li>
                        <li><Link className="legal_link" to={'/refund'}>Условия возврата и отмены платежа</Link></li>
                    </ul>
                </div>
            </div>
            <Footer props={'legal'}/>
        </div>
    );
}

export default Legal;