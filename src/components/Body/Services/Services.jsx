import React, {Component} from 'react'
import { Grid, Container, Header, Segment, Icon } from 'semantic-ui-react'
import './Services.scss'

class Services extends Component {

  render () {
    return (
      <Grid stackable className={'services-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
        <Container>
            <Header as='h2' textAlign='center'>Our Services</Header>
            <Segment.Group style={{ marginTop: '50px', boxShadow: 'none', border: 'none'}}>
              <Segment basic textAlign='center'>
                <Header icon as='h5' textAlign='center'>
                  <Icon name='phone' />
                </Header>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quia corrupti cupiditate! Recusandae porro modi laborum sed illum culpa perferendis excepturi vel corporis, saepe, odit non ex, minus animi. Dolor.
                </div>
              </Segment>
              <Segment basic textAlign='center'>
                <Header icon as='h5' textAlign='center'>
                  <Icon name='phone' />
                </Header>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quia corrupti cupiditate! Recusandae porro modi laborum sed illum culpa perferendis excepturi vel corporis, saepe, odit non ex, minus animi. Dolor.
                </div>
              </Segment>
              <Segment basic textAlign='center'>
                <Header icon as='h5' textAlign='center'>
                  <Icon name='phone' />
                </Header>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quia corrupti cupiditate! Recusandae porro modi laborum sed illum culpa perferendis excepturi vel corporis, saepe, odit non ex, minus animi. Dolor.
                </div>
              </Segment>
              <Segment basic textAlign='center'>
                <Header icon as='h5' textAlign='center'>
                  <Icon name='phone' />
                </Header>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quia corrupti cupiditate! Recusandae porro modi laborum sed illum culpa perferendis excepturi vel corporis, saepe, odit non ex, minus animi. Dolor.
                </div>
              </Segment>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Services