import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import './Gallery.scss'

class Gallery extends Component {

  render () {
    return (
      <Grid stackable className={'section gallery-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
          <div>Gallery</div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Gallery