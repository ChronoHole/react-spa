import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ParamsActionCreators from '../store/params/params.actions'

export const useParamsActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(ParamsActionCreators, dispatch)
}
