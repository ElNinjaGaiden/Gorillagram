import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

export default function mapDispatchToPros(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}