import React from 'react';
// import PropTypes from 'prop-types';
import briefcase from './../icons/briefcase-solid.svg';
import dumbbell from './../icons/dumbbell-solid.svg';
import gauge from './../icons/gauge-simple-solid.svg';
import brain from './../icons/brain-solid.svg';
import './skills.css';

class Skills extends React.Component<any, any> {
  // constructor(props: {
  //   counter: number;
  //   elements: [];
  //   updateState: () => void;
  // }) {
  //   super(props);
  //   this.updateMultiply = this.updateMultiply.bind(this);
  // }

  updateMultiply(option: { id: number; priceDiff: number }) {
    this.props.updateState(option);
  }
  render() {
    let { elements } = this.props;

    let icons = [
      { name: 'briefcase', url: briefcase },
      { name: 'dumbbell', url: dumbbell },
      { name: 'gauge', url: gauge },
      { name: 'brain', url: brain },
    ];

    console.log(elements);
    // console.log(icons[elements[0].logo]);
    return (
      elements && (
        <div className="buttonsWrapper">
          {elements.map(
            (
              element: {
                id: number;
                label: string;
                multiplier: number;
                price: number;
                counter: number;
                speed?: number;
                logo: string;
              },
              key: number
            ) => {
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
                      <img
                        src={
                          icons.find((icon) => icon.name === element.logo)?.url
                        }
                        className="logo"
                        alt=""
                      />
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
            }
          )}
        </div>
      )
    );
  }
}
// Skills.propTypes = {
//   counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   elements: PropTypes.array,
//   updateState: PropTypes.func,
// };

export default Skills;
