import React from 'react';
import PropTypes from 'prop-types';
import Skills from './../skills';
import Summary from './../summary';

import './content.css';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Skills
          counter={this.props.counter}
          elements={this.props.elements}
          updateState={this.props.updateState}
        />
        <div className="margin-10">
          <Summary elements={this.props.elements} />
        </div>
      </div>
    );
  }
}
Content.propTypes = {
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  elements: PropTypes.array,
  updateState: PropTypes.func,
};

export default Content;
