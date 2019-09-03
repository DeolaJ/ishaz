import React, {Component} from 'react'
import { Grid, Container, Header } from 'semantic-ui-react'
import './About.scss'

class About extends Component {

  render () {
    const { mobile } = this.props

    return (
      <Grid stackable className={'section about-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
          <Container>  
            <Grid>
              <Grid.Row className={'about-content'}>
                <Grid.Column width={8} className={'placeholder-image'}>

                </Grid.Column>

                <Grid.Column width={8}>
                  <div>
                    <Header as='h2' className={'section-title'}>About us</Header>
                    <p>
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                    <p>
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p> 
                    <p> 
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                  </div>
                </Grid.Column>
                
              </Grid.Row>

              <div className={"about-points"}>
                <Header as="h2" textAlign='center' className="section-title">
                    What we do?
                  </Header>
                <Grid stackable>
                  <Grid.Column width={mobile ? 16 : 5}>
                    <div>
                      <Header as='h4' textAlign='center'>Copy 1</Header>
                      <p>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      </p>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={mobile ? 16 : 5}>
                    <div>
                      <Header as='h4' textAlign='center'>Copy 2</Header>
                      <p>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      </p>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={mobile ? 16 : 5}>
                    <div>
                      <Header as='h4' textAlign='center'>Copy 3</Header>
                      <p>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      </p>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={mobile ? 16 : 5}>
                    <div>
                      <Header as='h4' textAlign='center'>Copy 4</Header>
                      <p>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      </p>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={mobile ? 16 : 5}>
                    <div>
                      <Header as='h4' textAlign='center'>Copy 5</Header>
                      <p>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      </p>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={mobile ? 16 : 5}>
                    <div>
                      <Header as='h4' textAlign='center'>Copy 6</Header>
                      <p>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      </p>
                    </div>
                  </Grid.Column>
                </Grid>
              </div>
            </Grid>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

export default About