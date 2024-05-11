import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './payment.css'

const Payment = ({props}) => {
    const cards = props

    const [menuState,setMenuState] = useState(1.1)
    


    return (
            <div className="main-content">
                <div className="programsCard">
                    {cards.map(item=>
                    (item.card).map(i=>
                    <div className='programsCard-blocks' onClick={()=>{setMenuState(i.key)}}>
                        <div className="programsCard-blocks-header">
                            <p className={menuState==i.key?'active':''}>{item.class+'.'+i.title}</p>
                        </div>
                        {menuState==i.key?
                            <div className="programsCard-blocks-information">
                                <div className='programsCard-description'>
                                    {i.description}
                                </div>
                                <div className='programsCard-price'>
                                    {i.price}
                                </div>
                                <button>Оплатить</button>
                                <div className="programsCard-blocks-offer">
                                    <Link className="legal_link" to={'/offer'}>Оферта</Link>
                                </div>
                            </div>
                            :
                            <div className="programsCard-blocks-information"/>
                        }
                    </div>)
                    )}
                </div>
            </div>
    );
}

export default Payment;
