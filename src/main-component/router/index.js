import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import Aboutpage from '../AboutPage'
import ServicePage from '../ServicePage'
import ServiceDetails from '../ServiceSingle'
import PricingPage from '../PricingPage'
import TeamPage from '../TeamPage'
import TestimonialPage from '../TestimonialPage'
import ErrorPage from '../ErrorPage'
import ContactPages from '../ContactPage'
import BlogPage from '../BlogPage'
import BlogPageSidebar from '../BlogPageSidebar'
import BlogSingleSidebar from '../BlogSingleSidebar'
import CollapsibleTablePage from "../ServiceList/CollapsibleTablePage";
import WorkSchedulePage from "../ServiceList/WorkSchedulePage";
import OrderPage from "../OrderPage/OrderPage";
import AuthPage from "../AuthPage/AuthPage";
import SmsConfirmationPage from "../SmsConfirmationPage/SmsConfiramtionPage";
import Dashboard from "../../components/admin/MainLayout";


const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Routes>
              <Route path='/' element={<AuthPage/>} />
              <Route path='/login' element={<AuthPage/>} />
              <Route path='/home' element={<Homepage/>} />
              {/* <Route path='/home2' element={<Homepage2/>} />
              <Route path='/home3' element={<Homepage3/>} /> */}
              <Route path='/about' element={<Aboutpage/>} />
              <Route path='/services' element={<ServicePage/>} />
              <Route path='/service-details' element={<ServiceDetails/>} />
              <Route path='/Pricing' element={<PricingPage/>} />
              <Route path='/team' element={<TeamPage/>} />
              <Route path='/testimonials' element={<TestimonialPage/>} />
              <Route path='/404' element={<ErrorPage/>} />
              <Route path='/contact' element={<ContactPages/>} />
              <Route path='/blog' element={<BlogPage/>} />
              <Route path='/blog-grid' element={<BlogPageSidebar/>} />
              <Route path='/blog-details' element={<BlogSingleSidebar/>} />
              <Route path='/table' element={<CollapsibleTablePage/>}/>
              <Route path='/schedule' element={<WorkSchedulePage/>}/>
              <Route path='/order' element={<OrderPage/>}/>
              <Route path='/code-verification' element={<SmsConfirmationPage/>}/>
              <Route path='/dashboard/admin' element={<Dashboard/>}/>
          </Routes>
      </Router>
      
    </div>
  );
}

export default AllRoute;
