import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './forms.sass'

function Form() {
    return (
        <div className="generall_page_wrapper">
            <div className="main" style={{margin:0}}><Header/></div>
            <div className="container">
                <script src="https://forms.yandex.ru/_static/embed.js"></script><iframe class="resp-iframe" src="https://forms.yandex.ru/u/65aebf2d2530c278d9a62430/?iframe=1" frameborder="0" name="ya-form-65aebf2d2530c278d9a62430"></iframe>
            </div>
            <Footer/>
        </div>
    );
}

export default Form;