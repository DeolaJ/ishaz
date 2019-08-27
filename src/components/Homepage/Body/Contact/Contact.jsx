import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

class Contact extends Component {

  render () {
    return (
      <Grid stackable className={'section contact-container'} style={{minHeight: '50vh'}}>
        <Grid.Column width={16} style={{marginBottom: '50px'}}>
          <div>Contact</div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Contact