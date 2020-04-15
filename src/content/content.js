import React from "react";
import PropTypes from "prop-types";
import styles from "./content.css";

class Content extends React.Component {
  constructor() {
    super();
    this.updateMultiply = this.updateMultiply.bind(this);
  }

  updateMultiply(option) {
    console.log(option);
    this.props.updateState(option);
  }
  renderButtons(){
    let { elements } = this.props;
    return (
      <div className="buttonsWrapper">
        {elements.map((element, key) => {
          return (
            <button
              key={key}
              className={ `buttons button${key}` }
              onClick={() => {
                this.updateMultiply({multiply: element.multiplier, price: element.price});
              }}
              disabled={element.price>this.props.counter}
            >
              {`${element.label}-${element.multiplier}`}
            </button>
          );
        })}
      </div>
    );
  }
  render() {
    
    return (
      <div className="content">
        {this.renderButtons()}
      </div>
    );
  }
}

Content.propTypes = {
  counter: PropTypes.number,
  elements: PropTypes.array,
  updateState: PropTypes.func
};

export default Content;
