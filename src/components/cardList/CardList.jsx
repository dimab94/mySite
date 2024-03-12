import { Link, json } from "react-router-dom";
import './cardList.css'
import { useState } from "react";
import Card from "../card/Card";

function CardList({setActive, cards, handleFilter}) {

    return (
        <div className="card-wrapper">
            {cards.map(item=>
                <Card cards={item} setActive={setActive} key={item.key} handleFilter={handleFilter}/>
            )}
        </div>
    );
}

export default CardList;