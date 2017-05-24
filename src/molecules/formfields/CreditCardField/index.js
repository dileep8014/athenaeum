import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';

import styles from 'molecules/formfields/shared/formfields.module.scss';

function CreditCardField(props) {
  const {
    className,
    label,
    cardType,
    creditCardNumber,
    expirationDate,
    securityCode,
    meta,
    input,
  } = props;

  const baseClass = [
    styles['formfield'],
    styles['credit-card'],
    { [styles.focused]: meta && meta.active },
    { [styles.hasError]: meta && meta.touched && meta.error && !meta.active },
    className
  ];

  return (
    <div>
      <div
        className={classnames(...baseClass)}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
      >
        <div className={classnames(styles['formfield-header'], styles['credit-card-header'])}>
          <label
            htmlFor='date'
            className={styles.label}
          >
            { label }
          </label>
          <Icon className={styles['credit-card-lock']} icon='lock' />
        </div>

        <div className={styles['credit-card-line1']}>
          { creditCardNumber }
          <Icon className={styles['credit-card-logo']} icon={cardType} />
        </div>

        <div className={styles['credit-card-line2']}>
          <div className={styles['credit-card-input']}>{ expirationDate }</div>
          <div className={styles['credit-card-input']}>{ securityCode}</div>
        </div>
      </div>
      { meta && meta.touched && meta.error &&
        <div className={styles.error}>{ meta.error }</div>
      }

      {meta && meta.touched && meta.warning &&
        <div className={styles.error}>{ meta.warning }</div>
      }
    </div>
  );
}

CreditCardField.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Label.
   */
  label: PropTypes.string,

  /**
   * Credit card form field.
   */
  creditCardNumber: PropTypes.node,

  /**
   * Expiration Date form field.
   */
  expirationDate: PropTypes.node,

  /**
   * Security Code form field.
   */
  securityCode: PropTypes.node,

  /**
   *  Create Logo of credit card. Accepted Cards ['visa', 'americanExpress', 'masterCard', `discover`]
   */
  cardType: PropTypes.string,
  /**
   * Redux Form meta prop for touched, error, active
   */
  meta: PropTypes.object,
  /**
   * Redux form input object
   */
  input: PropTypes.object.isRequired,
};

CreditCardField.defaultProps = {
  // Place any default props here.
  label: 'Credit Card Information',
  cardType: 'visa',
};

export default CreditCardField;
