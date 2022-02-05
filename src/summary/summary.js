import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';

import './summary.css';

class Summary extends React.Component {
  prepareData() {
    let skills = this.props.elements;
    let data = {
      labels: [],
      datasets: [
        {
          label: 'Counter',
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 205, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
          ],
          borderWidth: 1,
        },
      ],
    };
    skills.forEach((element) => {
      data.labels.push(element.label);
      data.datasets[0].data.push(element.counter);
    });

    return data;
  }

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
          <div className="charts">
            <Bar options={{}} data={this.prepareData()} />
          </div>
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
