import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddUser from "./watch/components/AddUser";
import { useState, useRef} from "react";
import StopWatchWrapper from "./watch/components/StopWatchWrapper";


function Utilites() {

    const [userArr, SetUserArr]= useState([])

    const createUser = (newUser) => {
        SetUserArr([...userArr,newUser])
    }
    const deleteUser = (id) => {
        SetUserArr([...userArr].filter(el=>el.id!==id))
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
            <Footer/>
        </div>
    );
}

export default Utilites;