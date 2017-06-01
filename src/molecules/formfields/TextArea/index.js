import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ErrorMessage from 'atoms/ErrorMessage';

import styles from './text_area.module.scss';

function TextArea( props ) {
  const {
    className,
    placeholder,
    label,
    rows,
    htmlFor,
    input,
    meta,
    noBaseStyle
  } = props;

  const classes = [
    !noBaseStyle && styles['textarea-field'],
    meta && meta.active && !noBaseStyle && styles['focused'],
    meta && meta.touched && meta.error && !meta.active && styles['hasError'],
    className,
  ];

  const message = meta && meta.touched && !meta.active && (meta.error || meta.warning);

  return (
    <div>
      <div className={classnames(...classes)}>
        { label &&
          <label className={classnames(styles['header'], styles['label'])} htmlFor={htmlFor}>{ label }</label>
        }

        <textarea
          className={styles['textarea-field']}
          placeholder={placeholder}
          rows={rows}
          {...input}
        />
      </div>
      <ErrorMessage
        condition={!!message}
        message={message}
      />
    </div>
  );
}

TextArea.propTypes = {
  /**
   * Label is optional. If not provided, component will reorganize accordingly.
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * `for` prop on label
   */
  htmlFor: PropTypes.string,

  /**
   * Will append new classname to classSet
   */
  className: PropTypes.string,

  /**
   * placeholder text for text field
   */
  placeholder: PropTypes.string,

  /**
   * number of default rows in textarea
   */
  rows: PropTypes.number,

  /**
   * object with all necessary props for input
   */
  input: PropTypes.object,

  /**
   * The props under the meta key are metadata about the state of this field that `redux-form` tracks.
   */
  meta: PropTypes.object,

  /**
   * Passing `noBaseStyle=true` will omit the base class style
   */
  noBaseStyle: PropTypes.bool,
};

TextArea.defaultProps = {
  placeholder: '',
  rows: 3,
  errorMessage: false,
};

export default TextArea;
