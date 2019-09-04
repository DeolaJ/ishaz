import React, {Component} from 'react'
import { Grid, Header, Icon, Segment, Button, Modal } from 'semantic-ui-react'
import Slider from 'react-slick'
import './TheTeam.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function LeftNav (props) {
    const {style, onClick} = props
    return (
        <div
            className="slick-arrow left-arrow"
            style={{...style}}
            onClick={onClick}
        >
            <Icon name='chevron left' size='large'/>
        </div>
    );
}

function RightNav (props) {
  const {style, onClick} = props
  return (
      <div
          className="slick-arrow right-arrow"
          style={{...style}}
          onClick={onClick}
      >
          <Icon name='chevron right' size='large'/>
      </div>
  );
}

class TheTeam extends Component {

  render () {
    const { mobile } = this.props
    const settings = mobile ? {
      className: "center",
      dots: false,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      nextArrow: <RightNav />,
      prevArrow: <LeftNav />,
      speed: 500
    } : {
      className: "center",
      centerMode: true,
      dots: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      nextArrow: <RightNav />,
      prevArrow: <LeftNav />,
      speed: 1000
    }

    const testimonials = [
      {
        id: 1,
        image: '',
        name: 'Jeff',
        body: 'Marie is an absolute gem. She is an outstanding resume'
      },
      {
        id: 2,
        image: '',
        name: 'Anon',
        body: 'During a career transition I felt the need to ensure my'
      },
      {
        id: 3,
        image: '',
        name: 'Bill',
        body: "I came across Marie and she right away made herself "
      },
      {
        id: 4,
        image: '',
        name: 'Joe Rey',
        body: 'I am so thankful to have come across Marie. My mind '
      },
      {
        id: 5,
        image: '',
        name: 'Frank',
        body: 'I am very happy with my experience with Amy. She was '
      },
      {
        id: 6,
        image: '',
        name: 'Rikky',
        body: "I would highly recommend Beth with all your needs"
      },
      {
        id: 7,
        image: '',
        name: 'Matthew',
        body: "While looking for new career opportunities I found"
      }
    ]

    return (
      <Grid stackable className={'section theteam-container'} style={{minHeight: '50vh'}}>
        <Grid.Column width={16}>
          <div className={'padded-container'}>
            <Header as='h2' className={'section-title'} textAlign='center'>Meet Our Team</Header>
            <br/>
            <Slider {...settings}>
              {
                testimonials.map((review) => (
                  <Segment key={review.id} basic>
                    <div className={'placeholder-image'}></div>
                    <div className={'segment-caption'}>
                      <Header as='h4' textAlign="center">
                        {review.name}
                      </Header>
                      <p className={'theteam-body'}>
                        {review.body}
                      </p>
                    </div>
                    
                  </Segment>
                ))
              }
            </Slider>
            <div className={'blocker left'}></div>
            <div className={'blocker right'}></div>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default TheTeam