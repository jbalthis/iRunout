import { reduxForm } from 'redux-form';
import AxialRunoutView from './AxialRunoutView';

const FORM = 'AxialRunout';

const AxialRunoutRF = reduxForm({
  form: FORM,
})(AxialRunoutView);

export default AxialRunoutRF;
