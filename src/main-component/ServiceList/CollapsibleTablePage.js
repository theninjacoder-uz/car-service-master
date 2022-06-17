import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import FooterSection from '../../components/Footer'
import CollapsibleTable from "../../components/ServiceList/CollapsibleTable";


const CollapsibleTablePage = () => {
    return(
        <div className="page-wrapper inner-page home-s-3">
            <Navbar/>
            <Breadcumb bdtitle={'Bosh sahifa'} bdsub={'Masterlar ro\'yxati'}/>
            <CollapsibleTable/>
            <FooterSection/>
        </div>
    )
}

export default CollapsibleTablePage;