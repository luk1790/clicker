import React from 'react';
import PropTypes from 'prop-types';

import './summary.css';

class Summary extends React.Component {
  render() {
    let skills = this.props.elements;
    console.log(skills);
    return (
      <div className="summary">
        <h2>Summary</h2>
        <div className="skills_content">
          <div className="skills">
            {skills.map((skill, key) => {
              return (
                <div key={key}>
                  <span>{skill.label}</span> {}
                  <span>{skill.counter}</span>
                </div>
              );
            })}
          </div>
          {/* <div className="charts">charts</div> */}
        </div>
      </div>
    );
  }
}
Summary.propTypes = {
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  elements: PropTypes.array,
};

export default Summary;
