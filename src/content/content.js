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
                className={`buttons button${key}`}
                onClick={() => {
                  this.updateMultiply({
                    multiplyDiff: element.multiplier,
                    priceDiff: element.price,
                  });
                }}
                disabled={element.price > this.props.counter}
              >
                {`${element.label}-${element.multiplier}-${element.counter}`}
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
