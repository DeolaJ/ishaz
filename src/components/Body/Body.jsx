import React, {Component} from 'react'
import './Body.scss'
import { Grid } from 'semantic-ui-react'
import Home from './Home/Home'
import About from './About/About'
import Gallery from './Gallery/Gallery'
import Services from './Services/Services'
import TheTeam from './TheTeam/TheTeam'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

class Body extends Component {

  render () {

    const { refs } = this.props

    return (
      <main className={'mainbody'} style={{width: '100%'}}>
        { refs !== {} &&
          <Grid stackable>
            <Grid.Column width={16}>
              <Home ref={refs[1]} />
              <About ref={refs[2]} />
              <Projects ref={refs[4]} />
              <Services ref={refs[5]} />
              <TheTeam ref={refs[3]} />
              <Gallery ref={refs[6]} />
              <Contact ref={refs[7]} />
            </Grid.Column>
          </Grid>
        }
      </main>
    )
  }
}

export default Body