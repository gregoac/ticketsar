import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EventListContainer from '../components/EventListContainer';
import ItemDetail1 from '../components/ItemDetail1';
import ItemDetail2 from '../components/ItemDetail2';
import Header from '../components/Header';
import SideMenuContainer from '../components/SideMenuContainer';
import SearchWidgetContainer from '../components/SearchWidgetContainer';
import Footer from '../components/Footer';
import EventPage from '../components/EventPage';


const Router = () => (
  
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
      

      <Header />
        <SideMenuContainer/>
        <SearchWidgetContainer/>
        <div className="container-home"><EventListContainer/></div>
        <Footer/>
      
      </Route>
      <Route exact path="/item/1" >
      
        <SideMenuContainer/>
        <ItemDetail1/>
        <Footer/>
        
        
      </Route>
      <Route exact path="/item/2" >
      
        <SideMenuContainer/>
        <ItemDetail2/>
        <Footer/>
        
        
      </Route>
      <Route exact path="/eventos" >
      
        <SideMenuContainer/>
        <EventPage/>
        <Footer/>
        
        
      </Route>
    </Switch>
    </BrowserRouter>
);

export default Router;