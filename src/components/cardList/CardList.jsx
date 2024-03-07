import { Link, json } from "react-router-dom";
import './cardList.css'
import { useState } from "react";
import Card from "../card/Card";

function CardList({setActive}) {

    const cards=[
        {
            class: 'triathlon',
            title:'Triathlon',
            description:'Комплексная подготовка по\u00A0всем трем видам.',
            price:'12 000₽',
            path:'https://forms.yandex.ru/u/653f51375d2a064c3cdf0328/',
            key:1
        },
        {
            class: 'multisport',
            title:'Multisport',
            description:'Подготовка по плаванию\u00A0/ велосипеду\u00A0/ бегу.',
            price:'10 000₽',
            path:'https://forms.yandex.ru/u/65aebf2d2530c278d9a62430/',
            key:2
        }
    ]

    return (
        <div className="card-wrapper">
            {cards.map(item=>
                <Card program={item} setActive={setActive} key={item.key}/>
            )}
        </div>
    );
}

export default CardList;