
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/cars'
import style from './style.css'

import CarDetails from '../../components/Cars/CarDetails'

class CarDetailsContainer extends Component {
  componentDidMount() {
    const {id} = this.props.params
    this.props.actions.getCarByModelId(id)
  }

  render() {
    const { id, price, name , imageUrl} = this.props.carDetails
    return (
      <div className={style.normal}>  
        <CarDetails
          id={id}
          price={price}
          name={name}
          imageUrl={imageUrl}
        />      
      </div>
    )
  }
}

CarDetailsContainer.defaultProps = {
  carDetails: {}
}

function mapStateToProps(state) {
  return {
    carDetails: state.cars.carDetails
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
  )(CarDetailsContainer)
