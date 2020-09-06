import React from 'react';
import PropTypes from 'prop-types';
import logo from '../header/logo.png';
// eslint-disable-next-line no-unused-vars
import styles from './content.css';

import { MyContext } from './../Context';

class Content extends React.Component {
  constructor() {
    super();
    this.updateMultiply = this.updateMultiply.bind(this);
  }

  updateMultiply(option) {
    this.props.updateState(option);
  }
  renderButtons() {
    let { elements } = this.props;
    return (
      elements && (
        <MyContext.Consumer>
          {({ counter }) => (
            <div className="buttonsWrapper">
              {elements.map((element, key) => {
                return (
                  <button
                    key={key}
                    className={`buttons button${key} ${
                      element.speed ? 'button-speed' : ''
                    }`}
                    onClick={() => {
                      this.updateMultiply({
                        id: element.id,
                        priceDiff: element.price,
                      });
                    }}
                    disabled={element.price > counter}
                  >
                    <div className="buttonsInner">
                      <img src={logo} className="logo" alt="" />
                      <div>{element.label}</div>
                      <div>
                        {element.multiplier !== 0 &&
                          `Multiplier:${element.multiplier}`}
                      </div>
                      {element.speed && <div>{`Speed: ${element.speed}`}</div>}
                      <div>{`counter:${element.counter}- ${element.price}`}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </MyContext.Consumer>
      )
    );
  }
  render() {
    return <div className="content">{this.renderButtons()}</div>;
  }
}
Content.propTypes = {
  elements: PropTypes.array,
  updateState: PropTypes.func,
};

export default Content;
