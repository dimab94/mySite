import './footer.css'
import Mail from '../../svg/mail.svg'
import Flag from '../../svg/flag.svg'
import { Link } from 'react-router-dom';
import Payment from '../../pic/Payment.png';

function Footer({props}) {
    let location = props
    return (
    <div className='footer'>
        <div className='footer_block section'>
            <div className='footer_social'>
                <h1 className='footer_title'>Baruzdin.tri</h1>
                <div className='footer_contact'>
                    <a href='https://vk.com/baruzdin_tri'>Vk</a>
                    <a href='https://t.me/dmitriibaruzdin'>Telegram</a>
                    <a href='https://www.instagram.com/baruzdin.tri?igsh=djFtajhyZzk3ZHJs&utm_source=qr'>Instagram</a>
                    <a href='https://www.strava.com/athletes/dbaruzdin'>Strava</a>
                    <div className='footer_contact_mail'>
                        <img src={Mail} alt='mail'/>
                        <a href="mailto:tri@baruzdin.online&body=Привет, у меня остались вопросы">tri@baruzdin.online</a>
                    </div>
                </div>
            </div>
            <div className='footer_right-side'>
                <a href="https://freekassa.ru" target="_blank" rel="noopener noreferrer">
                    <img src={Payment} title="Прием платежей на сайте"/>
                </a>
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