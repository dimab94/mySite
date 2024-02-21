import { Link } from "react-router-dom";
import './card.css'

function Card() {

    const items=[
        {
            clases: 'triathlon',
            title:'Triathlon',
            description:'Комплексная подготовка по\u00A0всем трем видам.',
            price:'12 000₽',
            path:'https://forms.yandex.ru/u/653f51375d2a064c3cdf0328/'
        },
        {
            clases: 'multisport',
            title:'Multisport',
            description:'Подготовка по плаванию\u00A0/ велосипеду\u00A0/ бегу.',
            price:'10 000₽',
            path:'https://forms.yandex.ru/u/65aebf2d2530c278d9a62430/'
        }
    ]

    return (
        <div className="card-wrapper">
            {items.map(item=>
                  <div className={'card card_'+item.clases}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <h5>от {item.price}</h5>
                    <Link preventScrollReset={false} className='card_link' to={item.path}>
                        <div className='card_button'>
                            <p>Заполнить анкету</p>
                        </div>
                    </Link>
                  </div>
            )}
        </div>
    );
}

export default Card;