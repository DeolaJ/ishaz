import React, { Component } from 'react'
import './Nav.scss'
import { Icon, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Nav extends Component {

  state = {
    navItems: [
      {
        id: 1,
        name: 'Home',
        link: '/',
        icon: 'home'
      },
      {
        id: 2,
        name: 'About Us',
        link: '/about',
        icon: 'user'
      },
      {
        id: 3,
        name: 'The Team',
        link: '/ourteam',
        icon: 'bar'
      },
      {
        id: 4,
        name: 'Projects',
        link: '/projects',
        icon: 'bar'
      },
      {
        id: 5,
        name: 'Services',
        link: '/services',
        icon: 'bar'
      },
      {
        id: 6,
        name: 'Gallery',
        link: '/gallery',
        icon: 'bar'
      },
      {
        id: 7,
        name: 'Contact Us',
        link: '/contact',
        icon: 'phone'
      }
    ]
  }

  componentDidMount () {
    const { navItems } = this.state
    const { createNavRef, refs } = this.props
    if ( refs === {} ) {
      createNavRef(navItems)
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
    });
  }

  // const handleClick = id =>
  //   refs[id].current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });

  // return (
  //   <div>
  //     <ul>
  //       {list.map(item => (
  //         <li key={item.id}>
  //           <button
  //             type="button"
  //             onClick={() => handleClick(item.id)}
  //           >
  //             Scroll Item {item.id} Into View
  //           </button>
  //         </li>
  //       ))}
  //     </ul>

  render () {
    const { navItems } = this.state

    return (
      <nav className={'nav'}>
        <List horizontal link>
          {
            navItems.map((item) => (
              <List.Item key={item.id} className={item.name ==='Home' ? `active ${item.name.toLowerCase()}` : `${item.name.toLowerCase()}`} onClick={this.changeActiveState(item.name.toLowerCase(), item.id)}>
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