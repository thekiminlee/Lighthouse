import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './pages/site/home.site';
import Ministry from './pages/site/ministry.site';

import Admin from './pages/admin/admin';
import AdminLogin from './pages/admin/login.admin';

import Footer from "./components/footer.component";
import Logo from "./assets/img/lighthouse_logo_half_white.png";
import HOME from "./assets/img/home.png";
import BIBLE from "./assets/img/bible.png";
import DONATE from "./assets/img/donate.png";
import INSTAGRAM from "./assets/img/instagram.png";

import "./assets/css/navbar.scss";

const DIM = "30";

function App() {
  return (
    <Router>
        <Navbar className="navbar-float-above">
          <Navbar.Brand href="/">
            <div width="70" height="70">
              <img src={Logo} height="70" alt="lighthouse logo"/>
            </div>
          </Navbar.Brand>
        </Navbar>
        <Nav className="flex-column menu-float-left">
          <div className="menu-container">
            <Nav.Link href="/">
              <img src={HOME} height={DIM} width={DIM}/>
            </Nav.Link>
          </div>
          <div className="menu-container"> 
            <Nav.Link href="/ministry">
              <img src={BIBLE} height={DIM} width={DIM}/>
            </Nav.Link>
          </div>
          <div className="menu-container">
            <Nav.Link href="#">
              <img src={DONATE} height={DIM} width={DIM}/>
            </Nav.Link>
          </div>
          <div className="menu-container">
            <Nav.Link href="#">
              <img src={INSTAGRAM} height={DIM} width={DIM} />
            </Nav.Link>
          </div>
        </Nav>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/ministry" component={Ministry} />

          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin" component={Admin} />
        </Switch>
        
        <Footer></Footer>
    </Router>
  );
}

export default App;
