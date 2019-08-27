import React, { Component } from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from '../src/components/Footer/Footer'
import Homepage from './components/Homepage/homepage'
import Errorpage from './components/Errorpage/errorpage'
import 'semantic-ui-css/semantic.min.css'
// import Loadable from 'react-loadable';
// import LoaderHome from './components/Loader/loader-home'

class App extends Component {

  render () {

    return (
      <div className={'body'}>

        <Router basename={'/'}>
          <Switch>
            <Route exact path={'/'} component={Homepage} />
            <Route component={Errorpage} />
          </Switch>
        </Router>
        
      </div>
    )
  }
}

export default App;
