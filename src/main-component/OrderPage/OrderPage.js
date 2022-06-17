import React from 'react';

// components
import Navbar from '../../components/Navbar'
import CustomizedDialogs from "../../components/OrderDialog/Order";


const OrderPage = () => {
    return(
        <div className="page-wrapper inner-page home-s-3">
            <Navbar/>
            <CustomizedDialogs/>
        </div>
    )
}

export default OrderPage;