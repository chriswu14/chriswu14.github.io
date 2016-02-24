import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()

export {
  loggerMiddleware,
  thunkMiddleware
}