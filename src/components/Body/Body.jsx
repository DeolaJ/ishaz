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
              <section ref={refs[1]}>
                <Home/>
              </section>
              <section ref={refs[2]}>
                <About/>
              </section>
              <section ref={refs[3]}>
                <Services/>
              </section>
              <section ref={refs[4]}>
                <Projects/>
              </section>
              <section ref={refs[5]}>
                <TheTeam/>
              </section>
              <section ref={refs[6]}>
                <Gallery/>
              </section>
              <section ref={refs[7]}>
                <Contact/>
              </section>
            </Grid.Column>
          </Grid>
        }
      </main>
    )
  }
}

export default Body