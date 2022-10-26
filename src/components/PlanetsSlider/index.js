/* eslint-disable jsx-a11y/no-static-element-interactions */
import Slider from 'react-slick'
import {Component} from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'
import './index.css'

const SamplePrevArrow = props => {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'black'}}
      onClick={onClick}
    />
  )
}

const SampleNextArrow = props => {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'black'}}
      onClick={onClick}
    />
  )
}

class PlanetsSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    }
    const {planetsList} = this.props
    return (
      <div className="slide" testid="planets">
        <h1>PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem each={each} key={each.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
