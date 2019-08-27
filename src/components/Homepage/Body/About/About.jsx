import React, {Component} from 'react'
import { Grid, Container, Header } from 'semantic-ui-react'
import './About.scss'

class About extends Component {

  render () {
    return (
      <Grid stackable className={'section about-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
          <Container>
            <Grid.Row>
              <div>
                <Header as='h2' textAlign='center'>About us</Header>
                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </p>
              </div>
            </Grid.Row>
            <Grid stackable style={{marginTop: '10%'}}>
              <Grid.Row columns={2} className={'very relaxed'}>
                <Grid.Column>
                  <div>
                    <Header as='h2' textAlign='center'>Our Mission</Header>
                    <p>
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column floated='right'>
                  <div>
                    <Header as='h2' textAlign='center'>Our Vision</Header>
                    <p>
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

export default About