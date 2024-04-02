import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Payment = (el) => {
    return (
        <div className="generall_page_wrapper">
            <div className="main-content">
                <div className="any-page"><Header/></div>
                <div className="payment_wrapper">
                    <div className="payment_programs">{el.class}</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Payment;
