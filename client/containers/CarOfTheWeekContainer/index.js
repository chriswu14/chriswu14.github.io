
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/cars'
import style from './style.css'

import IntroSection from '../../components/Home/IntroSection'
import CarDetails from '../../components/Cars/CarDetails'

class CarOfTheWeekContainer extends Component {
  componentDidMount() {
    this.props.actions.getCarOfTheWeek()
  }

  render() {
    const { review, modelId, price, name,  imageUrl} = this.props.carOfTheWeek
    console.log(this.props)
    return (
      <div className={style.normal}>  
        <IntroSection
          review={review}
        />
        <CarDetails
          id={modelId}
          price={price}
          name={name}
          imageUrl={imageUrl}
        />      
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    carOfTheWeek: state.cars.carOfTheWeek
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(CarOfTheWeekContainer)
