import './card.css'

import React from 'react';

const Card = ({cards, setActive, handleFilter}) => {
    return (
        setActive? 
        <div className={'card card_'+ cards.class.toLowerCase()} onClick={()=>{handleFilter(cards.card);setActive(true)}}>
          <div className="card_main">
              <p className="card_main_glitch">{cards.class}</p>
          </div>
          <div className="card_bottom">
              <p>Подробнее</p>
          </div>
        </div>
        :
        <div className='card subCard'>
          <div className="subCard_main">
              <p className="subCard_main_title">{cards.title}</p>
          </div>
        </div> 

    );
}

export default Card;