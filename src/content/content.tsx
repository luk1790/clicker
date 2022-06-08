import React from 'react';
import Skills from './../skills';
import Summary from './../summary';

import './content.css';

class Content extends React.Component<any, any> {
  // constructor(props: {
  //   counter: number;
  //   elements: [];
  //   updateState: () => void;
  // }) {
  //   super(props);
  // }

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

export default Content;
