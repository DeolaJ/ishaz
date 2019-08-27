import React, {Component} from 'react'
import { Grid, Header, Container, Icon } from 'semantic-ui-react'
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
          <Container textAlign='center' style={{height: '100%'}}>
            <Header>
              Welcome <br/>
              to <br/>
              Ishaz Real Estate
            </Header>
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