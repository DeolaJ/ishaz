import React, { Component } from 'react'
import './Nav.scss'
import { Icon, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  constructor (props) {
    super()
    this.state = {
      scrolling: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    console.log(this.state.scrolling)
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if ((window.scrollY === 0) && (this.state.scrolling === true)) {
      this.setState({
        scrolling: false
      })
    } else if ((window.scrollY !== 0) && (this.state.scrolling !== true)) {
      this.setState({
        scrolling: true
      })
    }
  }

  changeActiveState = (item, id) => () => {
    const { refs } = this.props
    var items = document.querySelectorAll('.nav .item')
    items.forEach((oneItem) => {
      var oneItemText = oneItem.innerText.toLowerCase()
      oneItem.className = (item === oneItemText) ? `item active ${oneItemText}` : `item ${oneItemText}`
    })
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  render () {
    const { navItems } = this.props

    return (
      <nav className={'nav'} style={{ position: this.state.scrolling ? 'fixed' : 'absolute'}}>
        <List horizontal link>
          {
            navItems.map((item) => (
              <List.Item 
                key={item.id} 
                className={item.name ==='Home' ? `active ${item.name.toLowerCase()}` : `${item.name.toLowerCase()}`} 
                onClick={this.changeActiveState(item.name.toLowerCase(), item.id)}
                >
                <Link to={item.link}>
                  <Icon name={item.icon} />{item.name}
                </Link>
              </List.Item>
            ))
          }
        </List>
      </nav>
    )
  }
}

export default Nav