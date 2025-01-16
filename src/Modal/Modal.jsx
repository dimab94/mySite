import React, { useEffect, useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import './modal.css'

const Modal = ({active,setActive,filterCards}) => {
    let programCard = filterCards.card 
    const [targetProgram,setTargetProgram]=useState(programCard[0])
    const [checkbox,setCheckbox]=useState()
    const checking = ()=>{checkbox ? setCheckbox(false) : setCheckbox(true)}
    
    useEffect(()=>{
        setTargetProgram(programCard[0])
    },[programCard])

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={()=>{setActive(false)}}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={e=>e.stopPropagation()}>
                <div className={filterCards?'modal_content_header '+ (filterCards.class).toLowerCase():'modal_content_header'}>
                    <div className='modal_close' onClick={()=>{setActive(false)}}>
                        <span></span>
                        <span></span>
                    </div>
                    <p className='modal_content_header_title'>{filterCards.class}</p>
                </div>
                <div className='modal_content_tumbler'>
                    {programCard.map(item=>
                        <div className={(targetProgram==item)?'modal_content_tumbler_el active':'modal_content_tumbler_el'} onClick={()=>setTargetProgram(item)} key={item.key}><p>{item.title}</p></div>
                    )}
                </div>
                <div className='modal_content_wrapper'>
                    <div className='modal_content_description'>{targetProgram.description}</div>
                    <div className='modal_content_advantages'>
                        <p className='modal_content_advantages_title'>Что входит в эту программу?</p>
                        <ul>
                            {(targetProgram.advantages).map(item=>
                                <li key={Math.random()}>{item}</li>
                            )}
                        </ul>
                    </div>
                    <div className='modal_content_price'>{targetProgram.price} ₽</div>
                    <div className='modal_content_acceptPolicy'>
                        <div>
                            <input type='checkbox' id="accept" name='privacy_accept' onClick={()=>checking()} />
                            <label htmlFor='accept'>Я согласен с условиями политики конфиденциальности.</label>
                        </div>
                        <Link className='card_link' to={'/privacy'}>Подробнее</Link>
                    </div>
                    <button disabled={!checkbox} className={checkbox? 'modal_content_button active': 'modal_content_button'} onClick={(e) => {e.preventDefault(); window.open(targetProgram.path)}}>Заполнить анкету</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
