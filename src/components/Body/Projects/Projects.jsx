import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import './Projects.scss'

class Projects extends Component {

  render () {
    return (
      <Grid stackable className={'projects-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
          <div>Portfolio</div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Projects