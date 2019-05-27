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
    refs: {}
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
    const { refs } = this.state

    return (
      <div className={'body'}>

        <Router basename={'/'}>
          <Nav createNavRef={this.createNavRef} refs={refs} />
          <Body refs={refs} />
        </Router>
        
        <Footer/>
      </div>
    )
  }
}

export default App;
