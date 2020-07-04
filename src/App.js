import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter as Router, Route, Link,Redirect } from 'react-router-dom'; 
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer.js'
import HomePage from './Pages/HomePage.js';
import AboutPage from './Pages/about.js';
import ProjectsPage from './Pages/projects.js';
import PhotoPage from './Pages/photo.js';
import Hero from './components/hero.js';

class App extends React.Component{
  
  constructor (props){
    super(props);
    this.state={
      title:"Valli Lakshmanan",
      headerLinks:[
        {title:'Home',path:'/'},
        {title:'About',path:'/About'},
        {title:'Projects',path:'/Projects'},
        {title:'Photography',path:'/Photography'}
      ],
      home:{
        Title:"Hey there.",
        Subtitle:'Welcome to my portfolio. A collection of the stuff im interested in and working on.'
      },
      about:{
        Title:"About me",
      },
      projects:{
        Title:"Some of my work",
        Subtitle:'Click on the image to view what each project is about, and how I created it.'
      },
      photography:{
        Title:"Some photos I have taken",
      },
    }
  }
  
  render(){
    return (
        <Router>
          <Container fluid={true} className='bg-dark'>
            <Navbar className='border-bottom' bg='dark' expand='lg'>
              <Navbar.Brand className='text-warning'>Valli Lakshmanan</Navbar.Brand>

              <Navbar.Toggle aria-controls='navbar-toggle'/>
              <Navbar.Collapse id='navbar-toggle'>
                <Nav className='ml-auto'>
                  <Link className='nav-link text-warning' to='/Home'>Home</Link>
                  <Link className='nav-link text-warning' to='/About'>About</Link>
                  <Link className='nav-link text-warning' to='/Projects'>Projects</Link>
                  <Link className='nav-link text-warning' to='/Photography'>Photography</Link>
                </Nav>
              </Navbar.Collapse>
                    
            
            </Navbar>           
            <Route exact path="/personal-website">
                <Redirect to="/Home" />
            </Route>
          <Route path="/Home" exact render={() => <HomePage Title={this.state.home.Title} Subtitle={this.state.home.Subtitle} />} />
          <Route path="/About" render={() =>  <AboutPage Title={this.state.about.Title} />} />
          <Route path="/Projects" render={() => <ProjectsPage Title={this.state.projects.Title} Subtitle={this.state.projects.Subtitle} />} />
          <Route path="/Photography" render={() => <PhotoPage Title={this.state.photography.Title} />} />
          
            <Footer/>

          </Container>
        </Router>
      );
  }
}

export default App;
