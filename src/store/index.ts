import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReduser } from './rootReduser'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
	rootReduser,
	composeWithDevTools(applyMiddleware(thunk))
)
