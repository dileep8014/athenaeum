import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Col from 'atoms/Layout/Col';
import Button from 'atoms/Button';
import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';
import Layout from 'atoms/Layout';

import styles from './main-content.module.scss';
import Resource from './Resource';
import { resourcesList, buttons } from '../data/resources';
import { RESOURCES } from '../constants';
import SelectProductModal from './SelectProductModal';

class SelectProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });

    return null;
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    const { className } = this.props;

    const modalProps = {
      header: 'Get a Quote',
      onRequestClose: this.closeModal,
      isOpen: this.state.modalIsOpen
    };

    return (
      <Layout
        className={cx(styles['main-content'], className)}
        mediumCols={[ 6 ]}
        largeCols={[ 4, 5, 3 ]}
        nested
      >
        <Col className={styles['select-product-1']} >
          <Text type={7} font='a'>What kind of insurance are you looking for?</Text>
          <Spacer size={6} />
          <Text type={10} font='b' italic>Get your free quote</Text>
          <Spacer size={18} />
          <Button
            variant='info'
            outline
            unflex
            onClick={this.openModal}
            className={styles.button}
          >
            { buttons.selectProductButton.text }
          </Button>
          <SelectProductModal modalProps={modalProps} />
        </Col>
        <Resource
          resources={resourcesList[RESOURCES.INSURANCE_GUIDES]}
        />
        <Resource
          resources={resourcesList[RESOURCES.GENIUS_CENTER]}
        />
        <Col className={styles['select-product-2']} >
          <Text type={7} font='a'>Want to receive weekly life hacks & personal finance advice?</Text>
          <Spacer size={18} />
          <Button
            variant='info'
            outline
            unflex
            data-sumome-listbuilder-id='b25d109e-ee6c-4d4a-b966-02932ea6df8d'
            className={styles.button}
          >
            { buttons.newsletterButton.text }
          </Button>
        </Col>
        <Resource
          resources={resourcesList[RESOURCES.HELPFUL_RESOURCES]}
        />
        <Resource
          resources={resourcesList[RESOURCES.REVIEWS]}
        />
        <Resource
          className={styles['last-resource']}
          resources={resourcesList[RESOURCES.ABOUT]}
        />
      </Layout>
    );
  }
}

SelectProduct.propTypes = {
  className: PropTypes.string
};

export default SelectProduct;
