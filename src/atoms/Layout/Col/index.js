import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from '../layout.module.scss';

function Col(props) {
  const {
    children,
    className,
    smallCols,
    mediumCols,
    largeCols,
    xLargeCols,
    xxLargeCols,
    fullwidth,
    flex,
    style,
  } = props;

  return (
    <div
      style={style}
      className={classnames(
        { [styles[`col-sm-${smallCols}`]]: smallCols },
        { [styles[`col-md-${mediumCols}`]]: mediumCols },
        { [styles[`col-lg-${largeCols}`]]: largeCols },
        { [styles[`col-xlg-${xLargeCols}`]]: xLargeCols },
        { [styles[`col-xxlg-${xxLargeCols}`]]: xxLargeCols },
        { [styles.fullwidth]: fullwidth },
        { [styles.flex]: flex },
        className,
      )}
    >
      { children }
    </div>
  );
}

Col.propTypes = {
  /**
   * Supply any additional class names.
   */
  className: PropTypes.string,
  /**
    * Overides column grid width within a viewport from `0px` up
    */
  smallCols: PropTypes.number,
  /**
   * Sets col grid width in viewport from `768px` up
   */
  mediumCols: PropTypes.number,
  /**
   * Sets col grid width in viewport from `1024px` up
   */
  largeCols: PropTypes.number,
  /**
   * Sets col grid width in viewport from `1280px` up
   */
  xLargeCols: PropTypes.number,
  /**
   * Sets col grid width in viewport from `1440px` up
   */
  xxLargeCols: PropTypes.number,
  /**
   * Overides flex, changes Col to grow to fill empty space in the row (`flex-grow: 1`)
   */
  flex: PropTypes.bool,
  /**
   * Overides and removes padding set from Layout
   */
  fullwidth: PropTypes.bool,
  /**
   * adds additional styles to the column as a React styles object  ``
   * - For useful positional styles, [Checkout this Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
   */
  style: PropTypes.object
};


export default Col;