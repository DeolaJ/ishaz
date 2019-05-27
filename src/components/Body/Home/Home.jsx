import React, {Component} from 'react'
import { Grid, Header, Container, Icon } from 'semantic-ui-react'
import './Home.scss'

class Home extends Component {
  scrollDown = (event) => {
    event.preventDefault()
  }

  render () {
    return (
      <Grid stackable className={'home-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
          <Container textAlign='center' style={{height: '100%'}}>
            <Header>
              Welcome <br/>
              to <br/>
              Ishaz Real Estate
            </Header>
            <a id="back-to-top" href={'/'} className="back-to-top" role="button" onClick={this.scrollDown}>
              <Icon name='chevron down' />
            </a>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home