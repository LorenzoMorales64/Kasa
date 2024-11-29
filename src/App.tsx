import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
//import { Collapse } from './components/collapse/Collapse';
//import { Header } from "./components/header/Header";
//import { Cards } from "./components/cards/Cards" ;
//import { Banner } from "./components/banner/Banner";
//import homeBanner from "../homeBanner.png"
import "./App.scss"
import logo from "./assets/images/LOGO.png"
import { About } from './page/about/About';
//import { Error } from "./page/Error/Error"
import { Gallery } from './page/gallery/Gallery';
import { CardsPage } from './page/cardsPages/CardsPage';
import { Error404 } from './page/error/Error404';

export const App: React.FC = () => {
  return (
     //Utilisation de Browser Router de React router dom
     <>
     <Router>
       <header>
         <img src={logo} alt="Logo de kasa" />
         <nav>
           <NavLink to="/"
             // Conditionnement de la classe du lien selon la raçine de l'url.
             // Utilisation du Navlink de react-router-dom pour faire la redirection
             className={({ isActive }) => isActive ? "active-link" : ""} >
             Accueil</NavLink>
           <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} >A Propos</NavLink>
         </nav>
       </header>
       <Routes>
         {/*<Route path="/home" element={<Home />} />*/}
         <Route path="/about" element={<About />} />
         <Route path='/' element={<Gallery />} />
          <Route path='card/:id' element={<CardsPage />} />
         <Route path="/error404" element={<Error404 />}/>
         <Route path="*" element={<Error404/>} /> 
       </Routes>

     </Router>
           <footer>
           <img src={logo} alt="logo" />
           <p>© 2020 Kasa. All rights reserved</p>
         </footer>
         </>
  );
};


