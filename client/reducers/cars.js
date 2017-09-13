import { ActionTypes } from '../constants/cars'

const initialState = {  
    carOfTheWeek: {}
}

export default function cars(state = initialState, action) {

  switch (action.type) {
    case ActionTypes.RECEIVE_CAR_OF_THE_WEEK: {  
      let cars = { carOfTheWeek: action.carOfTheWeek }  
      return Object.assign({}, state, cars)
    }

    case ActionTypes.RECEIVE_CAR_MAKES: {  
        let cars = { carMakes: action.carMakes }  
        return Object.assign({}, state, cars)
    }

    case ActionTypes.RECEIVE_CAR_MODELS_BY_MAKE_ID: {  
        let cars = { carModels: action.carModels }  
        return Object.assign({}, state, cars)
    }

    case ActionTypes.RECEIVE_CAR_BY_MODEL_ID: {  
        let cars = { carDetails: action.carDetails }  
        return Object.assign({}, state, cars)
    }

    default:
      return state
  }
}