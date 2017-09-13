
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as Actions from '../../actions/cars'
import style from './style.css'

import CarDetails from '../../components/Cars/CarDetails'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      enableModel: false,
      enableButton: false,
      selectedModelId: ''
    }

    this.handleMakeChange = this.handleMakeChange.bind(this)
    this.handleModelChange = this.handleModelChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  componentDidMount() {
    this.props.actions.getCarMakes()
  }

  handleMakeChange(event) {
    if(event.target.value) {
      let makeId = event.target.value

      this.props.actions.getCarModelsByMakeId(makeId);
      this.setState({enableModel: true})
    }
  }

  handleModelChange(event) {
    if(event.target.value) {
      let modelId = event.target.value
      this.setState({enableButton: true, selectedModelId: modelId})
    }
  }

  handleButtonClick(event) {
    browserHistory.push('/make/model/' + this.state.selectedModelId)
  }

  render() {
    const { carMakes, carModels } = this.props
    console.log(this.props)
    return (
      <div className={style.normal + ' row'}>
        <div className="col-sm-2">
        </div>
        <div className="col-sm-8">
          <div className="box-row">
            <select onChange={this.handleMakeChange}>
              <option value='' >Select...</option>
              {
                carMakes.map((make, index) => {
                  return <option key={index} value={make.id}>{make.name}</option>            
                })
              }
            </select>
          </div>
          <div className="box-row">
            <select onChange={this.handleModelChange} disabled={!this.state.enableModel}>
              <option value='' >Select...</option>
              {
                carModels.map((model, index) => {
                  return <option key={index} value={model.id}>{model.name}</option>            
                })
              }
            </select>
          </div>
          <div className="box-row">
            <button type="button" disabled={!this.state.enableButton} onClick={this.handleButtonClick}>View detail</button>
          </div>
        </div> 
        <div className="col-sm-2">
        </div>  
      </div>
    )
  }
}

SearchContainer.defaultProps = {
  carMakes: [],
  carModels: [],
}

function mapStateToProps(state) {
  return {
    carMakes: state.cars.carMakes,
    carModels: state.cars.carModels
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
)(SearchContainer)
