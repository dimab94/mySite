import React, { Children, useState } from 'react';
import './modal.css'

const Modal = ({active,setActive,filterCards}) => {
    let programCard = filterCards.card
    let defCard = programCard[0]

    const [targetProgram,setTargetProgram]=useState(defCard)

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={()=>{setActive(false)}}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={e=>e.stopPropagation()}>
                <div className='modal_content_header'>
                    <p className='modal_content_header_title'>{filterCards.class}</p>
                </div>
                <div className='modal_content_tumbler'>
                    {programCard.map(item=>
                        <div className='modal_content_tumbler_active' onClick={()=>setTargetProgram(item)}>{item.title}</div>
                    )}
                </div>
                <div className='modal_content_description'></div>
                <div className='modal_content_advantages'>
                    <p className='modal_content_advantages_title'>Что входит в эту программу?</p>
                    <ul>
                        {(targetProgram.advantages).map(item=>
                            <li>{item}</li>
                        )}
                    </ul>
                </div>
                <div className='modal_content_price'></div>
                <div className='modal_content_acceptPolicy'>
                    <input type="checkbox" id="accept" name="Я согласен с условиями политики конфиденциальности. Подробне" />
                </div>
                <button>
                    Заполнить анкету
                </button>
            </div>
        </div>
    );
}

export default Modal;
