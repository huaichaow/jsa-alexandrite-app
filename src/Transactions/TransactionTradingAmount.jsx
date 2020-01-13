import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { moneyAmount2String } from '../common/numbers';
import styles from './styles';

const TransactionTradingAmount = ({ type, shares, price }) => (
  <>
    <Text style={styles.transactionAmount}>
      {`${type === 'buy' ? '-' : '+'}${moneyAmount2String(price * shares)}`}
    </Text>
    <Text style={styles.transactionAmountDetails}>
      {`${moneyAmount2String(price)} | ${shares} shares`}
    </Text>
  </>
);

TransactionTradingAmount.propTypes = {
  shares: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default TransactionTradingAmount;
