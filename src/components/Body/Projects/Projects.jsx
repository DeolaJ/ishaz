import React, {Component} from 'react'
import { Grid, Header, Container, Card } from 'semantic-ui-react'
import './Projects.scss'

class Projects extends Component {

  render () {
    return (
      <Grid stackable className={'projects-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
          <Container>
            <Header as='h2' textAlign='center'>Ongoing Projects</Header>
            <Grid stackable style={{ marginTop: '50px'}}>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Card raised centered>
                    <Card.Header textAlign='center'>ICON</Card.Header>
                    <Card.Content>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Aut accusantium distinctio excepturi nemo nam molestias enim, 
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card raised centered>
                    <Card.Header textAlign='center'>ICON</Card.Header>
                    <Card.Content>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Aut accusantium distinctio excepturi nemo nam molestias enim, 
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card raised centered>
                    <Card.Header textAlign='center'>ICON</Card.Header>
                    <Card.Content>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Aut accusantium distinctio excepturi nemo nam molestias enim, 
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Projects