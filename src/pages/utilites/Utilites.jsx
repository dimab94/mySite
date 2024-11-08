import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddUser from "./watch/components/AddUser";
import { useState, useRef} from "react";
import StopWatchWrapper from "./watch/components/StopWatchWrapper";
import './watch/styles/stopWatch.css';


function Utilites() {

    const [userArr, SetUserArr]= useState([])

    const miniGroup = [{
        id:1,
        group:1,
        name:'Тимур'
    },{
        id:2,
        group:1,
        name:'Виктор'
    },{
        id:3,
        group:2,
        name:'Ярослав'
    },{
        id:4,
        group:3,
        name:'Саша А.'
    },{
        id:5,
        group:2,
        name:'Хаонань'
    },{
        id:6,
        group:3,
        name:'Аля'
    },{
        id:7,
        group:4,
        name:'Саша Ж.'
    },{
        id:8,
        group:5,
        name:'Катя'
    }]
    const runPass = [
        {
            id:9,
            group:1,
            name:'Максим'
        },{
            id:10,
            group:1,
            name:'Артем'
        },{
            id:11,
            group:2,
            name:'Дима'
        },{
            id:12,
            group:2,
            name:'Динара'
        },{
            id:13,
            group:3,
            name:'Даша'
        },{
            id:14,
            group:3,
            name:'Лена'
        },{
            id:15,
            group:1,
            name:'Сергей'
        },{
            id:16,
            group:4,
            name:'Соня'
        }
    ]

    const createUser = (newUser) => {
        SetUserArr([...userArr,newUser])
    }
    const deleteUser = (id) => {
        SetUserArr([...userArr].filter(el=>el.id!==id))
    }

    function selectGroup(ev){
        switch(ev){
            case 'miniGroup':
                SetUserArr(miniGroup)
                break;
            case 'runPass':
                SetUserArr(runPass)
                break;
        }
        
    }


    return ( 
        <div className="generall_page_wrapper">
            <div className="main-content">
                <div className="any-page"><Header/></div>
                <div className="timer">
                    <AddUser create={createUser}/>
                    <StopWatchWrapper userArr={userArr} deleteUser={deleteUser}/>
                </div>
            </div>
            <select name="student_info" id="groups" defaultValue={'1'} onChange={(e)=>selectGroup(e.target.value)}>
                <option disabled value="1">Список групп</option>
                <option value="miniGroup">Мини-группа</option>
                <option value="runPass">RunPass</option>
            </select>
            <Footer/>
        </div>
    );
}

export default Utilites;