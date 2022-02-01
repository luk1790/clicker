import React from 'react';
import PropTypes from 'prop-types';
import briefcase from './../icons/briefcase-solid.svg';
import dumbbell from './../icons/dumbbell-solid.svg';
import gauge from './../icons/gauge-simple-solid.svg';
import brain from './../icons/brain-solid.svg';
import './skills.css';

class Skills extends React.Component {
  constructor() {
    super();
    this.updateMultiply = this.updateMultiply.bind(this);
  }

  updateMultiply(option) {
    this.props.updateState(option);
  }
  render() {
    let { elements } = this.props;

    let icons = {
      "briefcase": briefcase,
      "dumbbell": dumbbell,
      "gauge": gauge,
      "brain": brain
    };

    console.log(icons[elements[0].logo]);
    return (
      elements && (
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
                disabled={element.price > this.props.counter}
              >
                <div className="buttonsInner">
                  <span style={{ fontSize: '48px' }}>
                  <img src={icons[element.logo]} className="logo" alt="" />
                  </span>
                  <div>{element.label}</div>
                  {/* <div>
                    {element.multiplier !== 0 &&
                      `Multiplier:${element.multiplier}`}
                  </div>
                  {element.speed && <div>{`Speed: ${element.speed}`}</div>}
                  <div>{`counter:${element.counter}- ${element.price}`}</div> */}
                </div>
              </button>
            );
          })}
        </div>
      )
    );
  }
}
Skills.propTypes = {
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  elements: PropTypes.array,
  updateState: PropTypes.func,
};

export default Skills;
