import React from "react";
import PropTypes from "prop-types";
import styles from "./content.css";

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
        <div className="buttonsWrapper">
          {elements.map((element, key) => {
            return (
              <button
                key={key}
                className={`buttons button${key} ${element.speed && 'button-speed'}`}
                onClick={() => {
                  this.updateMultiply({
                    id: element.id,
                    priceDiff: element.price,
                  });
                }}
                disabled={element.price > this.props.counter}
              >
                <div>{element.label}</div>
                <div>{element.multiplier !== 0 && `Multiplier:${element.multiplier}`}</div>
                <div>{ element.speed && `Speed: ${element.speed}`}</div>{`counter:${element.counter}- ${element.price}`}
              </button>
            );
          })}
        </div>
      )
    );
  }
  render() {
    return <div className="content">{this.renderButtons()}</div>;
  }
}
Content.propTypes = {
  counter: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  elements: PropTypes.array,
  updateState: PropTypes.func,
};

export default Content;
