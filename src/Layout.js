import React from 'react'
import Header from './components/common/Header/Header';
import HomePage from './components/common/HomePage/HomePage';
import Services from './components/common/Services/Services';
import WorkFlow from './components/common/WorkFlow/WorkFlow';
import WorkFlowDesign from './components/common/WorkFlowDesign/WorkFlowDesign';
import AboutUs from './components/common/AboutUs/AboutUs';
import AboutDynamix from './components/common/AboutDynamix/AboutDynamix';
import Footer from './components/common/Footer/Footer';

const Layout = () =>{
    return <div>
        <Header/>
        <HomePage/>
        <WorkFlow/>
        <WorkFlowDesign/>
        <Services/>
        <AboutUs/>
        <AboutDynamix/>
        <Footer/>
       
    </div>
}


export default Layout;