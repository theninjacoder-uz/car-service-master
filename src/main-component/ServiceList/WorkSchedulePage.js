import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import FooterSection from '../../components/Footer'
import CustomDay from "../../components/ServiceList/WorkSchedule";


const WorkSchedulePage = () => {
    return(
        <div className="page-wrapper inner-page home-s-3">
            <Navbar/>
            <Breadcumb bdtitle={'Bosh sahifa'} bdsub={'Ish jadvali'}/>
            <CustomDay/>
            <FooterSection/>
        </div>
    )
}

export default WorkSchedulePage;