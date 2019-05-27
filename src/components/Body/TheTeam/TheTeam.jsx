import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import './TheTeam.scss'

class TheTeam extends Component {

  render () {
    return (
      <Grid stackable className={'theteam-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
          <div>TheTeam</div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default TheTeam