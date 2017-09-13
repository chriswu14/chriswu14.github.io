import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({     
    RECEIVE_CAR_OF_THE_WEEK: null,
    REQUEST_CAR_OF_THE_WEEK: null,
    RECEIVE_CAR_MAKES: null,
    REQUEST_CAR_MAKES: null,
    RECEIVE_CAR_MODELS_BY_MAKE_ID: null,
    REQUEST_CAR_MODELS_BY_MAKE_ID: null,
    RECEIVE_CAR_BY_MODEL_ID: null,
    REQUEST_CAR_BY_MODEL_ID: null
})