import React, { Children } from 'react';
import './modal.css'

const Modal = ({active,setActive,filterCards}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false)}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={e=>e.stopPropagation()}>
                <div className='modal_content_header'>
                    <p className='modal_content_header_title'></p>
                </div>
                <div className='modal_content_tumbler'>
                    <div className='modal_content_tumbler_active'>Basic</div>
                    <div className='modal_content_tumbler_disabled'>Plus</div>
                </div>
                <div className='modal_content_description'></div>
                <div className='modal_content_advantages'>
                    <p className='modal_content_advantages_title'>Что входит в эту программу?</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
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
