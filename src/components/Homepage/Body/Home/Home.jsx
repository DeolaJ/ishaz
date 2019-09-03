import React, {Component} from 'react'
import { Grid, Header, Container, Icon, Button } from 'semantic-ui-react'
import './Home.scss'

class Home extends Component {
  scrollToNext = () => {
    const { refs } = this.props

    refs[2].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  render () {
    const { mobile, refs } = this.props

    return (
      <Grid stackable className={'section home-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
          <Container>
            <Header as="h1">
              Let's put you
              <br/>
              in your dream home
            </Header>
            <p>Come and meet a team of seasoned professionals working 
              <br/>
              daily to ensure your need are met
            </p>
            <Button size="large" color="grey">
              Contact us
            </Button>
            <button id="back-to-top" className="back-to-top" onClick={this.scrollToNext}>
              <Icon name='chevron down' />
            </button>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home