import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavbarBrand } from 'react-bootstrap';

//Importing pages for rendering
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import AndroidApp from './pages/projects/AndroidApp'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hanibal Brhanu',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
        {title: 'AndroidApp', path: '/androidapp'}
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Project that make a difference',
        text: 'Checkout my project below'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s talk'
      },
      androidapp: {
        title: 'My android app'
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Hanibal Brhanu</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
        <Route path="/about" exact render={() => <AboutPage  title={this.state.about.title} />} />
        <Route path="/contact" exact render={() => <ContactPage  title={this.state.contact.title} />} />
        <Route path="/androidapp" exact render={() => <AndroidApp  title={this.state.androidapp.title} />} />
        <Footer />
        </Container>
      </Router> 
    );
  }
}

export default App;
