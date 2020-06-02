import PropTypes from 'prop-types';
import React from 'react';
import { Input } from '@ui-kitten/components';
import styles from './styles';

const RFTextInput = ({ input: { onChange, value }}) => ( 
  <Input
    onChangeText={onChange}
    value={value}
    style={{flex: 1}}
  />
);

RFTextInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
}

export default RFTextInput;
