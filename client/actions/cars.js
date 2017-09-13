import { ActionTypes } from '../constants/cars'
import * as carsDataServer from '../server/carsDataServer'

export function getCarOfTheWeek() {
  return dispatch => {
    dispatch(requestCarOfTheWeeks())

    carsDataServer.getCarOfTheWeek(carOfTheWeek => {
      dispatch(receiveCarOfTheWeek(carOfTheWeek))
    })
  }
}

export function requestCarOfTheWeeks() {
  return {
    type: ActionTypes.REQUEST_CAR_OF_THE_WEEK
  }
}

export function receiveCarOfTheWeek(carOfTheWeek) {
  return {
    type: ActionTypes.RECEIVE_CAR_OF_THE_WEEK,
    carOfTheWeek: carOfTheWeek
  }
}

export function getCarMakes() {
    return dispatch => {
        dispatch(requestCarMakes())

        carsDataServer.getCarMakes(carMakes => {
        dispatch(receiveCarMakes(carMakes))
        })
    }
}

export function requestCarMakes() {
    return {
        type: ActionTypes.REQUEST_CAR_MAKES
    }
}
  
export function receiveCarMakes(carMakes) {
    return {
        type: ActionTypes.RECEIVE_CAR_MAKES,
        carMakes: carMakes
    }
}

export function getCarModelsByMakeId(makeId) {
    return dispatch => {
        dispatch(requestCarModelsByMakeId())

        carsDataServer.getCarModelsByMakeId((carMakes => {
        dispatch(receiveCarModelsByMakeId(carMakes))
        }), makeId)
    }
}

export function requestCarModelsByMakeId() {
    return {
        type: ActionTypes.REQUEST_CAR_MODELS_BY_MAKE_ID
    }
}
  
export function receiveCarModelsByMakeId(carModels) {
    return {
        type: ActionTypes.RECEIVE_CAR_MODELS_BY_MAKE_ID,
        carModels: carModels
    }
}

export function getCarByModelId(modelId) {
    return dispatch => {
        dispatch(requestCarByModelId())

        carsDataServer.getCarByModelId((carDetails => {
        dispatch(receiveCarByModelId(carDetails))
        }), modelId)
    }
}

export function requestCarByModelId() {
    return {
        type: ActionTypes.REQUEST_CAR_BY_MODEL_ID
    }
}
  
export function receiveCarByModelId(carDetails) {
    return {
        type: ActionTypes.RECEIVE_CAR_BY_MODEL_ID,
        carDetails: carDetails
    }
}