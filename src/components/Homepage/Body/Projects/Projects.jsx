import React, {Component} from 'react'
import { Grid, Header, Container, Card, Button } from 'semantic-ui-react'
import './Projects.scss'

class Projects extends Component {

  render () {
    const { mobile } = this.props

    return (
      <Grid stackable className={'section projects-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
          <Container>
            <Header as='h2' className={'section-title'} textAlign='center'>Ongoing Projects</Header>
            <Grid stackable style={{ marginTop: '50px'}}>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Card raised centered>
                    <div className={'placeholder-image'}></div>
                    <p className={'date-label'}>April 2019</p>
                    <Card.Content>
                      <Card.Header as="h4">ICON</Card.Header>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Aut accusantium distinctio excepturi nemo nam molestias enim, 
                      </p>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card raised centered>
                    <div className={'placeholder-image'}></div>
                    <p className={'date-label'}>April 2019</p>
                    <Card.Content>
                      <Card.Header as="h4">ICON</Card.Header>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Aut accusantium distinctio excepturi nemo nam molestias enim, 
                      </p>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card raised centered>
                    <div className={'placeholder-image'}></div>
                    <p className={'date-label'}>April 2019</p>
                    <Card.Content>
                      <Card.Header as="h4">ICON</Card.Header>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Aut accusantium distinctio excepturi nemo nam molestias enim, 
                      </p>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Container className={'bottom-button'} textAlign="center">
            <Button size="huge">See more</Button>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Projects