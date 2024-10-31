import React, { useState } from 'react';
import "./header.css";
import Home from "./Homes/Home";
import Companies from "./companies/companies.js" ;
import Jobs from "./Jobs/Jobs";
import Services from './Services/Services';
import MyAccount from './MyAccount/MyAccount.js';
// import html from './login/login.html'
// import logo from './path-to-your-logo.png'; // Adjust the path to your logo image

const Header = () => {
  // const homecall =()=>{
  //   let x=document.querySelector(".Main-body-div")
  //   x.appendChild(<Home/>)
  // }
  // const call =()=>{
  //   alert('helo');
  // }
  // const [showHeader, setShowHeader] = useState(false);

  // const homecall = () => {
  //   setShowHeader(true);
  // };
  
  const [view, setView] = useState('home')

  return (
    <div>
      <header className="header">
        <div className="header-logo"  onClick={() => setView('home')}>
          {/* <img src={"xyz.com"} alt="Logo" /> */}
          <span>naukri</span>
        </div>
        <nav className="header-nav">
          <div onClick={() => setView('jobs')}>Jobs</div >
          <div onClick={() => setView('companies')}>Companies</div >
          {/* <div onClick={() => setView('services')}>Services</div > */}
        </nav>
        {/* <div className="header-search">
          <input type="text" placeholder="portal, pune" />
          <button type="submit">🔍</button>
        </div> */}
        <div className="header-buttons">
          <div className="login-btn" onClick={() => setView('MyAccount')} >MyAccount</div>
        </div>
      </header>

      <main className="Main-body-div">
        {view === 'home' && <Home />}
        {view === 'jobs' && <Jobs />}
        {view === 'companies' && <Companies />}
        {view === 'services' && <Services/>}
        {view === 'MyAccount' && <MyAccount/>} 
      </main>
    </div>
  );
};

export default Header;
