import React, {Component} from 'react'
import { Grid, Header, Container } from 'semantic-ui-react'
import './TheTeam.scss'
import Arrow from './arrow'

class TheTeam extends Component {

  constructor (props) {
    super (props)
    this.state = {
      dir: 0,
      itemWidth: null,
      images: [
        {
          id: 1,
          background: 'blue'
        },
        {
          id: 2,
          background: 'red'
        },
        {
          id: 3,
          background: 'green'
        },
        {
          id: 4,
          background: 'yellow'
        }
      ]
    }
  }

  componentDidMount () {
    var itemWidth = document.querySelector('.image').clientWidth

    this.setState({
      itemWidth: itemWidth
    })
  }

  moveLeft = (event) => {
    event.preventDefault()
    var { itemWidth, dir } = this.state
    var items = document.querySelectorAll('.theteam-container .image')
    items.forEach(function (item) {
      item.animate(
        { transform: [ 'translateX(' + (dir * itemWidth) + 'px)', 'translateX(' + ((dir+1) * itemWidth) + 'px)' ] },
        { duration: 500, fill: 'forwards' })
      })
    dir++
    this.setState({
      dir: dir
    })
  }

  moveRight = (event) => {
    event.preventDefault()
    var { itemWidth, dir } = this.state
    var items = document.querySelectorAll('.theteam-container .image')
    items.forEach(function (item) {
      item.animate(
        { transform: [ 'translateX('+ (dir * itemWidth) + 'px)', 'translateX(' + ((dir-1) * itemWidth) + 'px)' ] },
        { duration: 500, fill: 'forwards' })
      })
    dir--
    this.setState({
      dir: dir
    })
  }

  render () {
    const { images } = this.state

    const right = 'right'
    const left = 'left'
    return (
      <Grid stackable className={'theteam-container'} style={{minHeight: '100vh'}}>
        <Grid.Column width={16}>
          <Arrow name='chevron left' click={this.moveLeft} position={left} />
          <Arrow name='chevron right' click={this.moveRight} position={right} />
          <Container>
            <Header as='h2' textAlign='center'>Meet Our Team</Header>
            <div style={{ width: '100%', overflow: 'hidden', height: '40px' }}>
              { 
                images.map((image) => (
                  <div key={image.id} className='image' style={{minHeight: '50%', height: '30px', maxWidth: '500px', width: '30%', display: 'inline-block', margin: '1.6%', float: 'left', left: '50%', top: '50%', backgroundColor: image.background }}></div>
                ))
              }
            </div>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

export default TheTeam