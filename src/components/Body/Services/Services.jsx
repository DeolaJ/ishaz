import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import './Services.scss'

class Services extends Component {

  render () {
    return (
      <Grid stackable className={'services-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
          <div>Services</div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Services