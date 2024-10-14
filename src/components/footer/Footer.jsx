import './footer.css'
import Mail from '../../svg/mail.svg'
import { Link } from 'react-router-dom';

function Footer({props}) {
    let location = props
    return (
    <div className='footer'>
        <div className='footer_block section'>
            <div className='footer_social'>
                <h1 className='footer_title'>Baruzdin-tri</h1>
                <div className='footer_contact'>
                    <a href='https://vk.com/baruzdin_tri' target="_blank">Vk</a>
                    <a href='https://t.me/dmitriibaruzdin' target="_blank">Telegram</a>
                    <a href='https://www.instagram.com/baruzdin.tri?igsh=djFtajhyZzk3ZHJs&utm_source=qr' target="_blank">Instagram</a>
                    <a href='https://www.strava.com/athletes/dbaruzdin' target="_blank">Strava</a>
                    <div className='footer_contact_mail'>
                        <img src={Mail} alt='mail'/>
                        <a href="mailto:mail@baruzdin-tri.ru&body=Привет, у меня остались вопросы">mail@baruzdin-tri.ru</a>
                    </div>
                </div>
            </div>
            <div className='footer_right-side'>
                <p className='doc_title'>Баруздин Д.Э. ИНН 781103860352</p>
                <div className='footer_right-side_documents'>
                {location !== 'legal'
                ?
                <Link className='doc' to={'/legal'}>Правовая информация</Link>
                :
                <div>Saint-Petersburg</div>
                }
                </div>
                <div className='footer_right-side_wrapper'>
                    <Link className="'footer_right-side_date'" to={'/utilites'}>2024</Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;