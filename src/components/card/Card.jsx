import './card.css'

import React from 'react';

const Card = ({program, setActive}) => {
    return (
        <div className={'card card_'+program.class} onClick={()=> setActive(true)}>
          <div className="card_main">
              <p className="card_main_glitch">{program.title}</p>
          </div>
          <div className="card_bottom">
              <p>Подробнее</p>
          </div>
        </div>

    );
}

export default Card;