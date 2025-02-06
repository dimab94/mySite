import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddUser from "./watch/components/AddUser";
import { useState, useRef} from "react";
import StopWatchWrapper from "./watch/components/StopWatchWrapper";
import './watch/styles/stopWatch.css';


function Utilites() {

    const [userArr, SetUserArr]= useState([])

    const miniGroup = [{
        group:1,
        name:'Виктор'
    },{
        group:2,
        name:'Ярослав'
    },{
        group:1,
        name:'Хаонань'
    },{
        group:3,
        name:'Аля'
    },{
        group:3,
        name:'Варя'
    },{
        group:4,
        name:'Саша Ж.'
    },{
        group:4,
        name:'Оля'
    },{
        group:5,
        name:'Катя'
    },{
        group:5,
        name:'Алексей'
    }]
    const runPass = [
        {
            group:1,
            name:'Максим'
        },{
            group:1,
            name:'Сергей З.'
        },{
            group:2,
            name:'Сергей Т.'
        },{
            group:3,
            name:'Дима'
        },{
            group:2,
            name:'Артем'
        },{
            group:3,
            name:'Олег'
        },{
            group:3,
            name:'Игорь'
        },{
            group:2,
            name:'Александра'
        },{
            group:4,
            name:'Динара'
        },{
            group:4,
            name:'Лена'
        },{
            group:4,
            name:'Юля'
        },{
            group:5,
            name:'Соня'
        },{
            group:5,
            name:'Даша'
        },{
            group:5,
            name:'Тамара'
        },{
            group:5,
            name:'Ксюша'
        },{
            group:5,
            name:'Таня'
        },{
            group:5,
            name:'Аня'
        },{
            group:5,
            name:'Азат'
        },{
            group:6,
            name:'Юлия'
        },{
            group:6,
            name:'Лилия'
        },{
            group:6,
            name:'Женя'
        },{
            group:6,
            name:'Настя'
        }
    ]

    const createUser = (newUser) => {
        SetUserArr([...userArr,newUser])
    }
    const deleteUser = (id) => {
        SetUserArr([...userArr].filter(el=>el.id!==id))
    }
    const refreshArr = (arr)=>{
        SetUserArr(arr)
    }

    function selectGroup(ev){
        switch(ev){
            case 'miniGroup':
                SetUserArr(miniGroup.map(el=>{return {...el,startTLap:null,resultList:null,id:Math.floor(Math.random()*10000)}}))
                break;
            case 'runPass':
                SetUserArr(runPass.map(el=>{return {...el,startTLap:null,resultList:null,id:Math.floor(Math.random()*10000)}}))
                break;
        }
        
    }


    return ( 
        <div className="generall_page_wrapper">
            <div className="main-content">
                <div className="any-page"><Header/></div>
                <div className="timer">
                    <AddUser create={createUser}/>
                    <StopWatchWrapper userArr={[userArr,refreshArr]} deleteUser={deleteUser} />
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