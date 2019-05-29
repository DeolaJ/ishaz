import React, { Component, createRef } from 'react'
import './App.scss'
import Nav from '../src/components/Nav/Nav'
import { BrowserRouter as Router } from 'react-router-dom'
import Body from '../src/components/Body/Body'
import Footer from '../src/components/Footer/Footer'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {

  // constructor(props) {
  //   super(props);
  // }
  
  // scrollDown = (event) => {
  //   event.preventDefault()
  //   if (window.offsetTop === 0){
  //     window.scrollTo(0, this.myRef.current.offsetTop);
  //   }
  // }

  state = {
    refs: {},
    navItems: [
      {
        id: 1,
        name: 'Home',
        link: '/',
        icon: 'home'
      },
      {
        id: 2,
        name: 'About Us',
        link: '/about',
        icon: 'user'
      },
      {
        id: 3,
        name: 'Services',
        link: '/services',
        icon: 'bar'
      },
      {
        id: 4,
        name: 'Projects',
        link: '/projects',
        icon: 'bar'
      },
      {
        id: 5,
        name: 'The Team',
        link: '/ourteam',
        icon: 'bar'
      },
      {
        id: 6,
        name: 'Gallery',
        link: '/gallery',
        icon: 'bar'
      },
      {
        id: 7,
        name: 'Contact Us',
        link: '/contact',
        icon: 'phone'
      }
    ]
  }

  componentDidMount () {
    const { navItems } = this.state
    this.createNavRef(navItems)
  }

  createNavRef = (arr) => {
    const refs = arr.reduce((acc, value) => {
      acc[value.id] = createRef();
      return acc;
    }, {});

    this.setState({
      refs: refs
    })
  }

  render () {
    const { refs, navItems } = this.state

    return (
      <div className={'body'}>

        <Router basename={'/'}>
          <Nav navItems={navItems} refs={refs} />
          <Body refs={refs} />
        </Router>
        
        <Footer/>
      </div>
    )
  }
}

export default App;
