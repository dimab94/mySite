import './footer.css'
import Mail from '../../svg/mail.svg'
import { Link } from 'react-router-dom';

function Footer({props}) {
    let location = props
    return (
    <div className='footer'>
        <div className='footer_block section'>
            <div className='footer_social'>
                <h1 className='footer_title'>Baruzdin.online</h1>
                <div className='footer_contact'>
                    <a href='https://vk.com/baruzdin_tri' target="_blank">Vk</a>
                    <a href='https://t.me/dmitriibaruzdin' target="_blank">Telegram</a>
                    <a href='https://www.instagram.com/baruzdin.tri?igsh=djFtajhyZzk3ZHJs&utm_source=qr' target="_blank">Instagram</a>
                    <a href='https://www.strava.com/athletes/dbaruzdin' target="_blank">Strava</a>
                    <div className='footer_contact_mail'>
                        <img src={Mail} alt='mail'/>
                        <a href="mailto:tri@baruzdin.online&body=Привет, у меня остались вопросы">tri@baruzdin.online</a>
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
                    <div className='footer_right-side_date'>2024</div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;